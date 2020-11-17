import { RawData, CharacterStyle } from './types';

// NOTE: repetitive logic in wrapping chars in html&md tags.
//       could potentially create a single function for both.

export const rawToHtml = (data: RawData): string => {
  let htmlOutput = '';
  data.characterList.forEach((charObj, idx) => {
    const char: string = data.text[idx];
    htmlOutput += applyHtmlStyles(char, charObj.style);
  });
  return htmlOutput;
};

export const rawToMarkdown = (data: RawData): string => {
  let mdOutput = '';
  data.characterList.forEach((charObj, idx) => {
    const char: string = data.text[idx];
    mdOutput += applyMdStyles(char, charObj.style);
  });
  return mdOutput;
};

const applyHtmlStyles = (char: string, styles: CharacterStyle[]): string => {
  let styledChar = char;
  styles.forEach(style => {
    switch (style) {
      case 'BOLD':
        styledChar = `<strong>${styledChar}</strong>`;
        break;
      case 'ITALIC':
        styledChar = `<em>${styledChar}</em>`;
        break;
      default:
        break;
    }
  });
  return styledChar;
};

const applyMdStyles = (char: string, styles: CharacterStyle[]): string => {
  let styledChar = char;
  styles.forEach(style => {
    switch (style) {
      case 'BOLD':
        styledChar = `**${styledChar}**`;
        break;
      case 'ITALIC':
        styledChar = `*${styledChar}*`;
        break;
      default:
        break;
    }
  });
  return styledChar;
};
