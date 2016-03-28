import React from 'react';
import { render } from 'react-dom';
// import { App } from './App';

function main() {
  const app = document.createElement('div');
  app.innerHTML = "Welcome to the Nitro Client Scaffolding"
  document.body.appendChild(app);
  // render(<App />, app);
}

main();
