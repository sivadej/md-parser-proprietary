import React from 'react';
import FlyntEditor from './FlyntEditor';

function App() {
  const markdown = 'Hello **Flyntlok**';
  function handleSubmit(md: string) {
    alert(md);
    console.log(md);
  }
  return (
    <FlyntEditor initialData={markdown} onSubmit={handleSubmit} focusOnMount />
  );
}

export default App;
