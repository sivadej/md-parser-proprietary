// unit tests for raw data insertion/deletion
import { insert } from '../rawModifiers';
import { RawData } from '../types';

test('insertion into unstyled data states', (): void => {
  const inserted = insert(emptyRaw, 'x', []);
  expect(inserted.text).toEqual('x');

  const inserted2 = insert(simpleRaw, 'z', []);
  expect(inserted2.text).toEqual('abcz123');
});

test('insertion with styling properties', (): void => {
  const inserted = insert(emptyRaw, 'x', ['BOLD']);
  expect(inserted.text).toEqual('x');
  //console.log(inserted.characterList[0].style);
  //expect(inserted.characterList[0].style[0].toEqual('BOLD'));

  //const inserted2 = insert(simpleRaw, 'z', ['BOLD', 'ITALIC']);
  //expect(inserted2.characterList[3].style[1].toEqual('ITALIC'));
});

// test for single unstyled character insertion
// test for single styled character insertion
// test insertion at end
// test insertion at beginning
// test insertion of special characters

// RawData sets:

const emptyRaw: RawData = {
  text: '',
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
    selectionStart: 3,
    selectionEnd: null,
    focusOffset: 0,
    isBackward: false,
    hasFocus: false,
  },
};
