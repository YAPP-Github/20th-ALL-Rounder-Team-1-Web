import { css } from 'styled-components';

export const reset = css`
  @charset "utf-8";

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  ol,
  dl,
  dd,
  p,
  fieldset,
  legend,
  button {
    margin: 0;
    padding: 0;
  }

  body,
  input,
  textarea,
  select,
  button {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue',
      'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji',
      'Segoe UI Emoji', 'Segoe UI Symbol', sans-serif;
  }

  ul,
  ol {
    list-style: none;
  }

  table {
    border-collapse: collapse;
  }

  em {
    font-style: normal;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  img {
    vertical-align: top;
  }

  fieldset {
    border: 0;
  }

  button {
    vertical-align: top;
    cursor: pointer;
    background-color: transparent;
    border: 0;
  }
`;
