import React, { useState, useRef } from 'react';
import { insert } from './proprietary/rawModifiers';
import { CharacterStyle, RawData } from './proprietary/types';
import { rawToHtml, rawToMarkdown } from './proprietary/rawConversions';
import { parseMd } from './proprietary/mdToRawParser';

export default function Proprietary() {
  const [raw, setRaw] = useState(initialRaw);
  const [boldToggled, setBoldToggled] = useState(false);
  let editable = useRef<HTMLDivElement>(null);

  function insertChar(char: string): void {
    const styleArray: CharacterStyle[] = [];
    if (boldToggled) styleArray.push('BOLD');
    const newData = insert(raw, char, styleArray);
    setRaw(newData);
  }

  function handleKeyDown(e: any): void {
    e.preventDefault();
    console.log(e.key);
    insertChar(e.key);
  }

  function toggleBold() {
    setBoldToggled(curr => !curr);
  }

  return (
    <div>
      <hr />
      <div contentEditable onKeyDown={handleKeyDown} ref={editable}></div>
      {JSON.stringify(raw)}
      <div>
        cursor position: {raw.selection.selectionStart}{' '}
        <button onClick={toggleBold}>{boldToggled ? 'B' : 'b'}</button>
      </div>
      <div>translated to HTML: {rawToHtml(raw)}</div>
      <div>translated to MD: {rawToMarkdown(raw)}</div>
    </div>
  );
}

const initialRaw: RawData = {
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
