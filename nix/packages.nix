{ lib, pkgs }:

let
  nodePackages = pkgs.callPackage ./node-packages {};
  packages = self: {
    sources = import ./sources.nix;
    allowList = pkgs.runCommand "allowList.json" { buildInputs = [ nodePackages.persistgraphql ]; } ''
        persistgraphql ${self.bcc-explorer-app.src} $out
    '';
    nodejs = pkgs.nodejs-12_x;
    nix-inclusive = pkgs.callPackage "${self.sources.nix-inclusive}/inclusive.nix" {};
    static = self.callPackage ./static.nix {
      src = self.bcc-explorer-app;
    };
    yarn-static = self.callPackage ./yarn2nix.nix {
      inherit (pkgs.yarn2nix-moretea) importOfflineCache mkYarnNix;
    };
    inherit (self.yarn-static.passthru) offlinecache;
    bcc-explorer-app = self.callPackage ./bcc-explorer-app.nix {};
  };
in pkgs.lib.makeScope pkgs.newScope packages
