import { Character, RawData } from './types';

export const parseMd = (md: string): RawData => {
  let rawObj = { ...emptyData }; // initialize data object

  const boldRgxMatcher = /\*\*([\s\S]+?)\*\*/g;
  const boldMatches = getMatchesArray(md, boldRgxMatcher);

  const textString = getTextString(md, boldMatches);

  const indexesOfMatchesInMd = boldMatches.map(match => match.index);
  const boldTextIndexes = getIndexesOfMatchesInText(indexesOfMatchesInMd, 2);

  rawObj.text = textString;
  rawObj.characterList = generateCharacterList(
    textString,
    boldTextIndexes,
    'BOLD'
  );

  return rawObj;
};

const generateCharacterList = (
  text: string,
  indexes: Array<number>,
  styleType: string
): any => {
  const charList = Array.from(text).map((char, i) => {
    if (indexes.includes(i)) return { style: [styleType] };
    else return { style: [] };
  });
  return charList;
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
// example: **a**b**c** => [0, 2]
const getIndexesOfMatchesInText = (
  mdMatchIndexes: Array<number>,
  offset: number //amount of extra characters from markdown tag (ex: bold => ** => 2)
): Array<number> => {
  console.log(mdMatchIndexes);
  const textStringMatchIndexes = mdMatchIndexes.map((mdIndex, i) => {
    console.log(
      `match #${i + 1}: char found at mdIndex ${
        mdIndex + offset
      } will be at textString index ${
        mdIndex - offset * 2 - offset * 2 * (i - 1)
      }`
    );
    return mdIndex - offset * 2 - offset * 2 * (i - 1);
  });
  console.log('returning array', textStringMatchIndexes);
  return textStringMatchIndexes;
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
