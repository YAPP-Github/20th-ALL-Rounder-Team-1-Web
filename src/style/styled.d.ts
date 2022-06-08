import { Interpolation } from 'styled-components';

declare module 'styled-components' {
  export interface IColors {
    WeekandBlue: string;
    WeekandBlueSub: string;
    WeekandBluePressed: string;
    WeekandBlueSubPressed: string;
    WeekandRed: string;
    Gray900: string;
    Gray800: string;
    Gray700: string;
    Gray600: string;
    Gray500: string;
    Gray400: string;
    Gray300: string;
    Gray200: string;
    Gray100: string;
  }

  export interface IFonts {
    Head1: Interpolation;
    Head2: Interpolation;
    SubHead1: Interpolation;
    SubHead2: Interpolation;
    SubHead3: Interpolation;
    Body1: Interpolation;
    Body2: Interpolation;
    Body3: Interpolation;
    Body4: Interpolation;
  }

  export interface IDefaultTheme {
    clearFloat: Interpolation;
    sr_only: Interpolation;
    elip1: Interpolation;
    multiElip: (lineHeight: number, rowNum: number) => Interpolation;
    icon: (url: string, width: number, height: number) => Interpolation;
  }
}
