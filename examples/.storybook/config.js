
import React from 'react';
import {configure, addDecorator} from '@storybook/react';

const context = require.context('./../src', true, /story\.js$/);

const StorybookDecorator = (story) => (
  <div style={{height:'100vh',width:'600px',display:'table',margin:'0 auto'}}>
    <div style={{display:'table-cell',verticalAlign:'middle'}}>
      {story()}
    </div>
  </div>
);

addDecorator(StorybookDecorator);

function loadStories() {
  context.keys().forEach((a,b,c) => console.log('hello', a,b,c))
  context.keys().forEach(context)
}

configure(loadStories, module);
