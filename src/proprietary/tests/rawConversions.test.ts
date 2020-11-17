// unit tests for raw data to html/md conversions
import { RawData } from '../types';
import { rawToMarkdown, rawToHtml } from '../rawConversions';

// assume RawData properties of text and characterList are properly mapped 1 to 1
test('Raw data characterList and text property should be equal length', (): void => {
  expect(testRaw.text.length).toEqual(testRaw.characterList.length);
  expect(simpleRaw.text.length).toEqual(simpleRaw.characterList.length);
});

test('should handle empty string inputs', (): void => {
  expect(rawToMarkdown(emptyRaw)).toEqual('');
  expect(rawToHtml(emptyRaw)).toEqual('');
});

test('should parse RawData object with simple formatting to markdown', (): void => {
  expect(rawToMarkdown(simpleRaw)).toEqual('abc123');
  expect(rawToMarkdown(testRaw)).toEqual('a**b**c 1*2*3');
});

test('should parse RawData object with simple formatting to HTML', (): void => {
  expect(rawToHtml(simpleRaw)).toEqual('abc123');
  expect(rawToHtml(testRaw)).toEqual('a<strong>b</strong>c 1<em>2</em>3');
});

test('should handle parsing strange spacing', (): void => {
  expect(rawToHtml(weirdSpaces)).toEqual('    1  2 3 3434  ');
  expect(rawToMarkdown(weirdSpaces)).toEqual('    1  2 3 3434  ');
});

test('should handle characters containing multiple styles', (): void => {
  expect(rawToHtml(boldAndItalicWord)).toEqual(
    '<em><strong>h</strong></em><em><strong>e</strong></em><em><strong>l</strong></em><em><strong>l</strong></em><em><strong>o</strong></em>'
  );
  expect(rawToMarkdown(boldAndItalicWord)).toEqual(
    '***h******e******l******l******o***'
  );
});

// TODO: test should handle line breaks
// TODO: test escape characters

// RawData sets:

const emptyRaw: RawData = {
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

const simpleRaw: RawData = {
  text: 'abc123',
  characterList: [
    { style: [] },
    { style: [] },
    { style: [] },
    { style: [] },
    { style: [] },
    { style: [] },
  ],
  selection: {
    selectionStart: null,
    selectionEnd: null,
    focusOffset: 0,
    isBackward: false,
    hasFocus: false,
  },
};

const testRaw: RawData = {
  text: 'abc 123',
  characterList: [
    { style: [] },
    { style: ['BOLD'] },
    { style: [] },
    { style: [] },
    { style: [] },
    { style: ['ITALIC'] },
    { style: [] },
  ],
  selection: {
    selectionStart: null,
    selectionEnd: null,
    focusOffset: 0,
    isBackward: false,
    hasFocus: false,
  },
};

const boldAndItalicWord: RawData = {
  text: 'hello',
  characterList: [
    { style: ['BOLD', 'ITALIC'] },
    { style: ['BOLD', 'ITALIC'] },
    { style: ['BOLD', 'ITALIC'] },
    { style: ['BOLD', 'ITALIC'] },
    { style: ['BOLD', 'ITALIC'] },
  ],
  selection: {
    selectionStart: null,
    selectionEnd: null,
    focusOffset: 0,
    isBackward: false,
    hasFocus: false,
  },
};

const weirdSpaces: RawData = {
  text: '    1  2 3 3434  ', // 17 chars
  characterList: [
    { style: [] },
    { style: [] },
    { style: [] },
    { style: [] },
    { style: [] },
    { style: [] },
    { style: [] },
    { style: [] },
    { style: [] },
    { style: [] },
    { style: [] },
    { style: [] },
    { style: [] },
    { style: [] },
    { style: [] },
    { style: [] },
    { style: [] },
  ],
  selection: {
    selectionStart: null,
    selectionEnd: null,
    focusOffset: 0,
    isBackward: false,
    hasFocus: false,
  },
};
