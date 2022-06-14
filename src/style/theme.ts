import { css, IColors, IFonts, IDefaultTheme } from 'styled-components';

const colors: IColors = {
  WeekandBlue: '#5086ff',
  WeekandBlueSub: '#eaf0ff',
  WeekandBluePressed: '#6d9aff',
  WeekandBlueSubPressed: '#f6f9ff',
  WeekandRed: '#ff7562',
  Gray900: '#17191c',
  Gray800: '#32353a',
  Gray700: '#515459',
  Gray600: '#747880',
  Gray500: '#8b929c',
  Gray400: '#aaaeb6',
  Gray300: '#c9ced4',
  Gray200: '#eceff2',
  Gray100: '#f5f7f8',
};

const DEFAULT_FONT_COLOR = 'Gray900';

const fonts: IFonts = {
  Title(color = DEFAULT_FONT_COLOR) {
    return css`
      font-size: 22px;
      line-height: 33px;
      font-weight: 700;
      color: ${({ theme: { colors } }) => colors[color]};
    `;
  },
  Head1(color = DEFAULT_FONT_COLOR) {
    return css`
      font-size: 20px;
      line-height: 30px;
      font-weight: 700;
      color: ${({ theme: { colors } }) => colors[color]};
    `;
  },
  Head2(color = DEFAULT_FONT_COLOR) {
    return css`
      font-size: 18px;
      line-height: 27px;
      font-weight: 700;
      color: ${({ theme: { colors } }) => colors[color]};
    `;
  },
  SubHead1(color = DEFAULT_FONT_COLOR) {
    return css`
      font-size: 18px;
      line-height: 29px;
      font-weight: 600;
      color: ${({ theme: { colors } }) => colors[color]};
    `;
  },
  SubHead2(color = DEFAULT_FONT_COLOR) {
    return css`
      font-size: 16px;
      line-height: 26px;
      font-weight: 600;
      color: ${({ theme: { colors } }) => colors[color]};
    `;
  },
  SubHead3(color = DEFAULT_FONT_COLOR) {
    return css`
      font-size: 14px;
      line-height: 22px;
      font-weight: 600;
      color: ${({ theme: { colors } }) => colors[color]};
    `;
  },
  Body1(color = DEFAULT_FONT_COLOR) {
    return css`
      font-size: 16px;
      line-height: 26px;
      font-weight: 500;
      color: ${({ theme: { colors } }) => colors[color]};
    `;
  },
  Body2(color = DEFAULT_FONT_COLOR) {
    return css`
      font-size: 14px;
      line-height: 22px;
      font-weight: 500;
      color: ${({ theme: { colors } }) => colors[color]};
    `;
  },
  Body3(color = DEFAULT_FONT_COLOR) {
    return css`
      font-size: 12px;
      line-height: 19px;
      font-weight: 500;
      color: ${({ theme: { colors } }) => colors[color]};
    `;
  },
  Body4(color = DEFAULT_FONT_COLOR) {
    return css`
      font-size: 10px;
      line-height: 16px;
      font-weight: 500;
      color: ${({ theme: { colors } }) => colors[color]};
    `;
  },
};

const defaultTheme: IDefaultTheme = {
  clearFloat: css`
    content: '';
    display: block;
    clear: both;
  `,
  sr_only: css`
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    overflow: hidden;
  `,
  elip1: css`
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `,
  multiElip(lineHeight: number, rowNum: number) {
    return css`
      max-height: ${lineHeight * rowNum};
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: ${rowNum};
    `;
  },
  icon(url: string, width: number, height: number) {
    return css`
      display: inline-block;
      vertical-align: top;
      background: url(${url}) no-repeat;
      width: ${width}px;
      height: ${height}px;
    `;
  },
};

export const theme = {
  colors,
  fonts,
  ...defaultTheme,
};
