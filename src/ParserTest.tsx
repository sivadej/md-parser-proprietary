import React, { useState } from 'react';
import { parseMd } from './proprietary/mdToRawParser';
import { rawToHtml, rawToMarkdown } from './proprietary/rawConversions';

export default function ParserTest() {
  //const testMd = 'x**a**b**c**de**f**'; //xabcdef - bold at 1, 3, 6
  //const testMd = '**a**b**c**';

  const [testMd, setTestMd] = useState('x**a**b**c**de**f**');

  const parsed = parseMd(testMd);
  return (
    <div>
      <div>parser test</div>
      <div>state: {testMd}</div>
      <div>parsed: {JSON.stringify(parsed)}</div>
      <hr />
      <div>Text only: {parsed.text}</div>
      <div>translated to HTML: {rawToHtml(parsed)}</div>
      <div>translated to MD: {rawToMarkdown(parsed)}</div>
    </div>
  );
}
