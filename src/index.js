import React from 'react';
import { render } from 'react-dom';
import { App } from './App';

function main() {
  const app = document.createElement('div');
  document.body.appendChild(app);
  // render(<App />, app);
}

main();
