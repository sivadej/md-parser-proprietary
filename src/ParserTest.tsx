import React from 'react';
import { parseMd } from './proprietary/mdToRawParser';

export default function ParserTest() {
  const testMd = '**a**b**c**de**f**'; //xabcdef - bold at 1, 3, 6
  //const testMd = '**a**b**c**';
  return (
    <div>
      <div>parser test</div>
      <div>test md string: {testMd}</div>
      <div>parsed: {JSON.stringify(parseMd(testMd))}</div>
    </div>
  );
}
