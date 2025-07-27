export const replaceSpaces = (tag: string): string => {
  return tag
    .trim()
    .replace(/\s+/g, '_')
    .toLowerCase();
};