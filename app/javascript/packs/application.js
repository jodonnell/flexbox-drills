/* eslint no-console:0 */

import React from 'react';
import { render } from 'react-dom';
import CssEntry from './css_entry';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.body.appendChild(document.createElement('div'));
    render(<CssEntry/>, container);
});
