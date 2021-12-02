const deploy = require('./index');

process.env.GODX_ERA = 'cole';
process.env.GODX_NETWORK = 'mainnet';
process.env.GRAPHQL_API_PROTOCOL = 'https';
process.env.GRAPHQL_API_HOST = 'a-bcc-graphql-deployment.com';
process.env.GRAPHQL_API_PORT = '443';
process.env.BUCKET = 'cole-mainnet-explorer';
process.env.AWS_DEFAULT_REGION = 'ap-southeast-2';

deploy();
