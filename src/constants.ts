import {
  gray,
  blue,
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark,
  blackA,
} from "@radix-ui/colors";

// Create your theme
export const theme = {
  colors: {
    ...gray,
    ...blue,
    ...red,
    ...green,
  },
  iconColor: gray.gray11,
  iconBackground: gray.gray3,
  overlayColors: blackA.blackA7,
};

// Create your dark theme
export const darkTheme = {
  colors: {
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
  },
  iconColor: grayDark.gray11,
  iconBackground: grayDark.gray3,
  overlayColors: blackA.blackA9,
  overlayContentBackground: grayDark.gray2,
};

// Values in pixels:
const BREAKPOINTS = {
  tabletMin: 550,
  laptopMin: 1100,
  desktopMin: 1500,
};

// Converted to rems:
export const QUERIES = {
  tabletAndUp: `(min-width: ${BREAKPOINTS.tabletMin / 16}rem)`,
  laptopAndUp: `(min-width: ${BREAKPOINTS.laptopMin / 16}rem)`,
  desktopAndUp: `(min-width: ${BREAKPOINTS.desktopMin / 16}rem)`,
};

export const IconSize = {
  sm: 16,
  md: 24,
};
