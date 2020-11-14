import { RawData } from './types';

// assume RawData properties of text and characterList are mapped 1 to 1

const wrapWithStyle = (char: string, style: string): string => {
  switch (style) {
    case 'BOLD':
      return `<strong>${char}</strong>`;
    case 'ITALIC':
      return `<em>${char}</em>`;
    default:
      return char;
  }
};

export const rawToHtml = (data: RawData): string => {
  let htmlOutput = '';
  // iterate over text, apply styles as needed and append to output
  data.characterList.forEach((char, idx) => {
    console.log(data.text[idx]);
  });
  return htmlOutput;
};

export const rawToMarkdown = (data: RawData): string => {
  let mdOutput = '';
  return mdOutput;
};
