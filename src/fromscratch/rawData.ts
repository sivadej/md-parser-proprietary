import { RawData } from './types';

export const data: RawData = {
  text: 'abc 123',
  characterList: [
    { style: ['BOLD', 'ITALIC'] },
    { style: [] },
    { style: ['ITALIC'] },
    { style: ['ITALIC'] },
    { style: [] },
    { style: ['BOLD'] },
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