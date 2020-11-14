// unit tests for raw data insertion/deletion
import { insert } from './rawModifiers';
import { RawData } from './types';

test('insertion into basic unstyled data state', (): void => {
  const inserted = insert(emptyRaw, 'x', []);
  console.log(emptyRaw.text);
  console.log(inserted.text);
  expect(inserted.text).toEqual('xabc');
});

// test for single unstyled character insertion
// test for single styled character insertion
// test insertion at end
// test insertion at beginning
// test insertion of special characters

// RawData sets:

const emptyRaw: RawData = {
  text: 'abc',
  characterList: [],
  selection: {
    selectionStart: 0,
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
