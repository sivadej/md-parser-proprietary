import { RawData, Character, CharacterStyle } from './types';

// insert styled character (or subset of chars?) at given cursor position.
// returns fully updated raw data object

// assume cursor position is data.selection.selectionStart where 0 is first position

export const insert = (
  data: RawData,
  char: string,
  styles: CharacterStyle[]
): RawData => {
  const position: number = data.selection.selectionStart || 0;
  const text: string = data.text;

  const newCharObj: Character = { style: [...styles] };
  const textArr: any = Array.from(text);
  textArr.splice(position, 0, char);
  const newText = textArr.join('');
  const newPosition: number = position + 1;

  return {
    text: newText,
    characterList: [...data.characterList].splice(position, 0, newCharObj),
    selection: {
      ...data.selection,
      selectionStart: newPosition,
    },
  };
};

export const remove = () => {
  // TODO
  return;
};
