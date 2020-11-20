/* global JSX */

import React from 'react';
import { Editor, EditorState } from 'draft-js';

import styles from './EditorUI.module.css';

interface EditorUIProps {
  editorState: EditorState;
  onChange: (e: EditorState) => void;
  ref?: React.RefObject<Editor>;
  placeholder?: string;
  onBlur?: (e: React.SyntheticEvent) => void;
  onFocus?: (e: React.SyntheticEvent) => void;
  focusOnMount?: boolean;
  isBoldToggled?: boolean;
  isItalicToggled?: boolean;
  onStyleBtnClick: (style: EditorStyle) => void;
}

type EditorStyle = 'BOLD' | 'ITALIC' | 'STRIKETHROUGH';

export default function EditorUI(props: EditorUIProps): JSX.Element {
  const { isBoldToggled, isItalicToggled, onStyleBtnClick } = props;
  const {
    container,
    iconRow,
    iconRowLeft,
    iconRowRight,
    inputBox,
    btnSend,
    messageRow,
    btnStyleControl,
    btnToggledOn,
  } = styles;
  return (
    <div className={container}>
      <div className={messageRow}>
        <div className={inputBox}>
          <Editor {...props} />
        </div>
      </div>
      <div className={iconRow}>
        <div className={iconRowLeft}>
          <button
            onClick={() => onStyleBtnClick('BOLD')}
            className={`${btnStyleControl} ${
              isBoldToggled ? btnToggledOn : ''
            }`}>
            B
          </button>
          <button
            onClick={() => onStyleBtnClick('ITALIC')}
            className={`${btnStyleControl} ${
              isItalicToggled ? btnToggledOn : ''
            }`}>
            i
          </button>
          <button
            onClick={() => onStyleBtnClick('STRIKETHROUGH')}
            className={`${btnStyleControl}`}
            disabled>
            S
          </button>
        </div>
        <div className={iconRowRight}>
          <button className={btnSend}>Send</button>
        </div>
      </div>
    </div>
  );
}
