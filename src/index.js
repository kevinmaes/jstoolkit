import React from 'react';
import { render } from 'react-dom';

function main() {
  const app = document.createElement('div');
  app.innerHTML = 'Welcome to the Nitro Client Scaffolding';
  document.body.appendChild(app);
  render(<div />, app);
}

main();
