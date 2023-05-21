import FilsonProMediumOtf from './public/fonts/FilsonProMedium.otf';
import FilsonProMediumWoff from './public/fonts/FilsonProMedium.woff';
import FilsonProMediumWoff2 from './public/fonts/FilsonProMedium.woff2';
import PoppinsRegular from './public/fonts/Poppins-Regular.ttf';
import PoppinsMedium from './public/fonts/Poppins-Medium.ttf';

import { createStitches } from '@stitches/react';

import { fontSizes, colors } from './stitches';

const systemFont = `
system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"
`;

const fonts = {
  filsonPro: {
    name: 'Filson Pro',
    family: [
      {
        fontFamily: 'Filson Pro',
        fontStyle: 'normal',
        fontDisplay: 'swap',
        fontWeight: '500',
        src: `url(${FilsonProMediumOtf}), url(${FilsonProMediumWoff2}), url(${FilsonProMediumWoff})`,
      },
    ],
  },
  poppins: {
    name: 'Poppins',
    family: [
      {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontDisplay: 'swap',
        fontWeight: '400',
        src: `url(${PoppinsRegular})`,
      },
      {
        fontFamily: 'Poppins',
        fontStyle: 'normal',
        fontDisplay: 'swap',
        fontWeight: '500',
        src: `url(${PoppinsMedium})`,
      },
    ],
  },
};

export const {
  config,
  createTheme,
  css,
  globalCss,
  styled,
  theme,
  keyframes,
  getCssText,
} = createStitches({
  theme: {
    colors,
    fonts: {
      system: systemFont,
      filsonPro: `${fonts.filsonPro.name}, ${systemFont}`,
      poppins: `${fonts.poppins.name}, ${systemFont}`,
    },
    fontSizes,
  },
  media: {
    bp1: '(max-width: 1330px)',
    bp800: '(max-width: 800px)',
  },
});

export const darkTheme = createTheme('dark', {});

export const globalStyles = globalCss({
  '@font-face': [...fonts.filsonPro.family, ...fonts.poppins.family],
  'html, body': {
    fontFamily: fonts.filsonPro.name,
    color: '$primary-text',
    margin: 0,
    padding: 0,
    scrollBehavior: 'smooth',
  },
});
