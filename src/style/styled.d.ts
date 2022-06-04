import { FlattenSimpleInterpolation } from 'styled-components';

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
    Head1: FlattenSimpleInterpolation;
    Head2: FlattenSimpleInterpolation;
    SubHead1: FlattenSimpleInterpolation;
    SubHead2: FlattenSimpleInterpolation;
    Body1: FlattenSimpleInterpolation;
    Body2: FlattenSimpleInterpolation;
    Body3: FlattenSimpleInterpolation;
  }

  export interface IDefaultTheme {
    clearFloat: FlattenSimpleInterpolation;
    sr_only: FlattenSimpleInterpolation;
    elip1: FlattenSimpleInterpolation;
    multiElip: (lineHeight: number, rowNum: number) => FlattenSimpleInterpolation;
    icon: (url: string, width: number, height: number) => FlattenSimpleInterpolation;
  }
}
