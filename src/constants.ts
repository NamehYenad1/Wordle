import {
  gray,
  blue,
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark,
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

export const IconSize = 24;
