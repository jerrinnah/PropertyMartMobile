import { createTheme } from "@shopify/restyle";
import { tokens } from './tokens'


const COLOR_PALLET = {
  background: tokens.color.white.val,
  textColor: tokens.color.textColor.val,
  primaryColor: tokens.color.primaryBtnBg.val,
  errorColor: tokens.color.primaryError.val,
  warningColor: tokens.color.primaryWarning.val,
  successColor: tokens.color.primarySuccess.val,
  btnBlue: tokens.color.primaryBtnBg.val,
  headerTextColor: tokens.color.headerColor.val,
  textInputBorderColor: tokens.color.textInputBorderColor.val,
  disabledButtonColor: tokens.color.disabledBtnBg.val,
  secondaryBackgroundColor: tokens.color.secondaryBg.val,
  white: 'white',
  black: 'black',
};

const theme = createTheme({
  colors: {
    ...COLOR_PALLET,
  },
  breakpoints: {
    phone: 0,
    longPhonee: {
      width: 0,
      height: 812
    },
    tablet: 768,
    larret: 1024,
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    '2xl': 24,
    '3xl': 28,
  },
  textVariants: {
    header: {
      fontSize: 30,
      color: "headerTextColor",
      fontFamily: "BasierRegular",
    },
    subheader: {
      fontSize: 24,
      color: "headerTextColor",
      fontFamily: "BasierRegular",
    },
    body: {
      fontSize: 16,
      color: "textColor",
      fontFamily: "BasierRegular",
    },
    xs: {
      fontSize: 14,
      color: "textColor",
      fontFamily: "BasierRegular",
    },
    defaults: {
      fontSize: 15,
      color: "textColor",
      fontFamily: "BasierRegular",
    },
  },
});

export type Theme = typeof theme;
export default theme;

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
  },
};
