import 'es6-shim';
import React, { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';

import 'draft-js/dist/Draft.css';
import styles from './MyEditor.module.css';

function MyEditor(): JSX.Element {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  // const dropUndoRedoStacks = (): void => {
  //   // editorState maintains arrays undoStack and redoStack, not needed onSubmit
  //   // return editorState obj with empty undo/redo arrays
  // };

  function onChange(state: any) {
    setEditorState(state);
  }

  function onBoldClick() {
    onChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'));
  }

  return (
    <div>
      editor: <button onClick={onBoldClick}>B</button>
      <div className={styles.editorContainer}>
        <Editor editorState={editorState} onChange={setEditorState} />
      </div>
      <hr />
      editorState: {JSON.stringify(editorState)}
    </div>
  );
}

export default MyEditor;
