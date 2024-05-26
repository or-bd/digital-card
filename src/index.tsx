import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Global } from '@emotion/react';
import View from './components/View';
import Style from './styles/global';

const appElement = document.getElementById('app');

if (!appElement) {
  throw new Error('app div not found');
}

const root = createRoot(appElement);

root.render(
  <StrictMode>
    <Global styles={Style} />
    <View />
  </StrictMode>,
);

