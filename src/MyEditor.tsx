import React, { useState, useRef, useEffect } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import { draftToMarkdown, markdownToDraft } from 'markdown-draft-js';

import 'draft-js/dist/Draft.css';
import styles from './MyEditor.module.css';

function MyEditor({ focusOnMount = true }): JSX.Element {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );
  const [selectionState, setSelectionState] = useState(
    editorState.getSelection()
  );
  const editorRef: any = useRef<HTMLElement>(null);

  useEffect(() => {
    if (editorRef.current && focusOnMount) editorRef.current.focus();
  }, [focusOnMount]);

  const inlineStyle = editorState.getCurrentInlineStyle();
  const isBold = inlineStyle.has('BOLD');
  // const hasFocus = selectionState.getHasFocus();

  function onChange(state: EditorState): void {
    setEditorState(state);
  }

  function onBoldClick() {
    onChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
    // editorRef.current.focus();
  }

  // console.log('selection state', JSON.stringify(selectionState, null, 2));

  function showButtons() {
    console.log('show buttons');
  }

  function hideButtons() {
    console.log('hide buttons');
  }

  return (
    <div>
      editor: <button onClick={onBoldClick}>{isBold ? 'B' : 'b'}</button>
      <div className={styles.editorContainer}>
        <Editor
          editorState={editorState}
          onChange={setEditorState}
          placeholder='hello?'
          ref={editorRef}
          onFocus={showButtons}
          onBlur={hideButtons}
        />
      </div>
      <div>markdown result</div>
    </div>
  );
}

export default MyEditor;
