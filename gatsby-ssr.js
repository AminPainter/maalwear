import React from 'react';

import App from './src/components/app';

export const onRenderBody = ({ setHtmlAttributes }) => {
  setHtmlAttributes({
    lang: 'en',
  });
};

export const wrapPageElement = ({ element }) => <App>{element}</App>;
