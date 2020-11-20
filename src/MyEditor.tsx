import React, { useState, useRef, useEffect } from 'react';
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
import { draftToMarkdown, markdownToDraft } from 'markdown-draft-js';
import EditorUI from './EditorUI';

import 'draft-js/dist/Draft.css';
import styles from './MyEditor.module.css';

/**
 * Markdown-draftJS translation and editor styling state
 * is handled at this component level.
 *
 * @param markdown
 * @param onSubmit
 * @param isPlainText
 * @param focusOnMount
 *
 * @returns EditorUI with translated markdown and
 *  */
function MyEditor({ focusOnMount = true }): JSX.Element {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [selectionState, setSelectionState] = useState(
    editorState.getSelection()
  );
  const [mdState, setMd] = useState('');
  const editorRef: any = useRef<HTMLElement>(null);

  useEffect(() => {
    if (editorRef.current && focusOnMount) editorRef.current.focus();
  }, [focusOnMount]);

  const inlineStyle = editorState.getCurrentInlineStyle();
  const isBold = inlineStyle.has('BOLD');
  const isItalic = inlineStyle.has('ITALIC');

  function onChange(state: EditorState): void {
    const markdown = draftToMarkdown(convertToRaw(state.getCurrentContent()));
    setMd(markdown);
    setEditorState(state);
  }

  function toggleStyle(style: string): void {
    onChange(RichUtils.toggleInlineStyle(editorState, style));
  }

  console.log(JSON.stringify(editorState, null, 2));

  function handleFocus(): void {
    console.log('enable style icons');
  }

  function handleBlur(): void {
    console.log('disable style icons');
  }

  function handleStyleBtnClick(style: any): void {
    toggleStyle(style);
  }

  return (
    <div className={styles.container}>
      <EditorUI
        editorState={editorState}
        onChange={onChange}
        placeholder='hello?'
        ref={editorRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onStyleBtnClick={handleStyleBtnClick}
        isBoldToggled={isBold}
        isItalicToggled={isItalic}
      />
      <hr />
      <div>markdown state</div>
      <div>{mdState === '' ? '(empty)' : mdState}</div>
    </div>
  );
}

export default MyEditor;
