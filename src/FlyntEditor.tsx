import React, { useState, useRef, useEffect } from 'react';
import { EditorState, RichUtils, convertToRaw, convertFromRaw } from 'draft-js';
import { draftToMarkdown, markdownToDraft } from 'markdown-draft-js';
import EditorUI from './EditorUI';

import 'draft-js/dist/Draft.css';

/**
 * Markdown<->draftJS translations and editor styling state
 * is handled at this component level.
 *
 * Returns EditorUI component with props.
 *  */

interface FlyntEditorProps {
  initialData: string;
  onSubmit: (md: string) => void;
  isPlainText?: boolean;
  focusOnMount?: boolean;
}

export default function FlyntEditor(props: FlyntEditorProps): JSX.Element {
  const { initialData, onSubmit, isPlainText, focusOnMount } = props;

  // if (isPlainText) {
  //   // render plaintext editor component with onSubmit and markdown props
  //   return <div>PlainText editor component here</div>;
  // }

  const rawDraft = markdownToDraft(initialData);
  const initialContentState = convertFromRaw(rawDraft);
  const initialEditorState = EditorState.createWithContent(initialContentState);
  const [editorState, setEditorState] = useState(initialEditorState);

  // const [selectionState, setSelectionState] = useState(
  //   editorState.getSelection()
  // );
  // const [mdState, setMd] = useState('');

  const editorRef: any = useRef<HTMLElement>(null);
  useEffect(() => {
    if (editorRef.current && focusOnMount) editorRef.current.focus();
  }, [focusOnMount]);

  function handleSubmit() {
    onSubmit(draftToMarkdown(convertToRaw(editorState.getCurrentContent())));
  }

  if (isPlainText) console.log('isPlainText enabled: skip translation layer');

  const inlineStyle = editorState.getCurrentInlineStyle();
  const isBold = inlineStyle.has('BOLD');
  const isItalic = inlineStyle.has('ITALIC');

  function onChange(state: EditorState): void {
    setEditorState(state);
  }

  function toggleStyle(style: string): void {
    onChange(RichUtils.toggleInlineStyle(editorState, style));
  }

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
    <EditorUI
      editorState={editorState}
      onChange={onChange}
      placeholder='hello?'
      ref={editorRef}
      // onFocus={handleFocus}
      // onBlur={handleBlur}
      onStyleBtnClick={handleStyleBtnClick}
      isBoldToggled={isBold}
      isItalicToggled={isItalic}
      focusOnMount={focusOnMount}
      onSubmit={handleSubmit}
    />
  );
}
