// unit tests for raw data to html/md conversions
import { RawData } from './types';
import {rawToMarkdown, rawToHtml} from './rawConversions';

const simpleRaw: RawData = {
  text: 'abc 123',
  characterList: [
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

test('Raw data characterList and text property should be equal length', (): void=> {  
  expect (testRaw.text.length).toEqual(testRaw.characterList.length);
  expect (simpleRaw.text.length).toEqual(simpleRaw.characterList.length);
});

// test('should handle empty string inputs', (): void=> {  
//   expect (rawToMarkdown(simpleRaw)).toEqual('abc123');
//   expect (rawToMarkdown(testRaw)).toEqual('a**b**c 1*2*3');
// });

test('should convert RawData object to formatted markdown', (): void=> {  
  expect (rawToMarkdown(simpleRaw)).toEqual('abc123');
  //expect (rawToMarkdown(testRaw)).toEqual('a**b**c 1*2*3');
});

test('should convert RawData object to formatted HTML', (): void => {
  expect (rawToHtml(simpleRaw)).toEqual('abc123');
  //expect (rawToHtml(testRaw)).toEqual('a<strong>b</strong>c 1<em>2</em>3');
});