export function entropicsToBcc(entropics: number) {
  return entropics / 1000000;
}

export const entropicsStringToBccNumber = (entropics: string) =>
  entropicsToBcc(parseInt(entropics, 10));
