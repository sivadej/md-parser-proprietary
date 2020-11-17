export interface RawData {
  text: string;
  characterList: Character[];
  selection: Selection;
}

export interface Selection {
  selectionStart: number | null;
  selectionEnd: number | null;
  focusOffset: number | null;
  isBackward: boolean;
  hasFocus: boolean;
}

export interface Character {
  style: CharacterStyle[];
}

export type CharacterStyle = 'BOLD' | 'ITALIC';
