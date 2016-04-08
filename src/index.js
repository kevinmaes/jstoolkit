import React from 'react';
import { render } from 'react-dom';

const main = () => {
  const app = document.createElement('div');
  app.innerHTML = 'Welcome to the Nitro Client Scaffolding';
  document.body.appendChild(app);
  render(<div>This is the Nitro Client Scaffolding</div>, app);
};

main();
