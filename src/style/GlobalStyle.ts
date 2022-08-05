import { createGlobalStyle } from 'styled-components';

import { reset } from './reset';

export const GlobalStyle = createGlobalStyle`
   @font-face {
      font-family: 'Pretendard';
      font-style: normal;
      src: url(https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css) format('woff2'),
         url(https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard-dynamic-subset.css) format('woff');
   }

   ${reset}

   #root {
      max-width: 1120px;
      margin: 0 auto;
   }

   input:focus, select:focus, option:focus, textarea:focus, button:focus {
	   outline: none;
   }
`;
