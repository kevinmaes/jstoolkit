import { test, createComponent, createRenderer } from '../spec_helper';
import React from 'react';
import WelcomeComponent from '../WelcomeComponent';

test('Test the welcome component text', (t) => {
    const renderer = createRenderer();
    const expected = <div>Welcome to the Client Scaffolding project!</div>;
    renderer.render(<WelcomeComponent />);
    const result = renderer.getRenderOutput();
  
    t.jsxEquals(result, expected);

  t.end();
});
