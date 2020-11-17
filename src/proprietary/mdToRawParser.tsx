import { RawData } from './types';

export const parseMd = (md: string): RawData => {
  let rawObj = { ...emptyData }; // initialize data object

  const boldRgxMatcher = /\*\*([\s\S]+?)\*\*/g;
  const boldMatches = getMatchesArray(md, boldRgxMatcher);

  console.log('boldmatches', boldMatches);
  console.log('getTextString() =>', getTextString(md, boldMatches));

  rawObj.text = getTextString(md, boldMatches);

  return rawObj;
};

const getMatchesArray = (md: string, rgx: RegExp): any[] => {
  const matches = md.matchAll(rgx);
  return Array.from(matches);
};

// generate string with markdown removed
const getTextString = (md: string, matchData: any[]): string => {
  let textString = md;
  matchData.forEach(match => {
    textString = textString.replace(match[0], match[1]);
  });
  return textString;
};

// calculate index locations of markdown matches at textString.
// offset: amount of extra characters from markdown tag (bold => ** ** => 4)
const getIndexesToStyle = (
  md: string,
  matchData: any[],
  offset: number
): Array<number> => {
  // number of matchers is matchData.length
  //
  return [-1];
};

const emptyData: RawData = {
  text: '',
  characterList: [],
  selection: {
    selectionStart: null,
    selectionEnd: null,
    focusOffset: 0,
    isBackward: false,
    hasFocus: false,
  },
};
