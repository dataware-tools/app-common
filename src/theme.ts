import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import type {} from "@mui/x-data-grid/themeAugmentation";

const HDLBaseColor = 200;
const BasicSaturation = "10%";
let theme = createTheme({
  palette: {
    common: {
      black: `hsl(${HDLBaseColor}, ${BasicSaturation}, 2%)`,
      white: `hsl(${HDLBaseColor}, ${BasicSaturation}, 98%)`,
    },
    primary: {
      light: `hsl(${HDLBaseColor}, 100%, 75%)`,
      main: `hsl(${HDLBaseColor}, 92%, 40%)`,
      dark: `hsl(${HDLBaseColor}, 100%, 25%)`,
    },
    secondary: {
      light: `hsl(266, 28%, 70%)`,
      main: `hsl(266, 36%, 52%)`,
      dark: `hsl(280, 50%, 33%)`,
    },
    error: {
      light: `hsl(0, 85%, 73%)`,
      main: `hsl(350, 75%, 50%)`,
      dark: `hsl(1, 77%, 34%)`,
    },
    warning: {
      light: `hsl(60, 80%, 75%)`,
      main: `hsl(63, 100%, 45%)`,
      dark: `hsl(60, 75%, 30%)`,
    },
    success: {
      light: `hsl(140, 55%, 71%)`,
      main: `hsl(140, 60%, 42%)`,
      dark: `hsl(140, 58%, 22%)`,
    },
    info: {
      light: `hsl(${HDLBaseColor}, 100%, 75%)`,
      main: `hsl(${HDLBaseColor}, 92%, 40%)`,
      dark: `hsl(${HDLBaseColor}, 100%, 25%)`,
    },
    background: {
      default: `hsl(${HDLBaseColor}, ${BasicSaturation}, 98%)`,
      paper: `hsl(${HDLBaseColor}, ${BasicSaturation}, 98%)`,
    },
    text: {
      primary: `hsl(${HDLBaseColor}, ${BasicSaturation}, 13%)`,
      secondary: `hsl(${HDLBaseColor}, ${BasicSaturation}, 46%)`,
      disabled: `hsl(${HDLBaseColor}, ${BasicSaturation}, 62%)`,
    },
    divider: `hsl(${HDLBaseColor}, ${BasicSaturation}, 88%)`,
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {},
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        variant: "contained",
      },
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontFamily: [
            "Oxanium",
            "Helvetica Neue",
            "Arial",
            "Helvetica",
            "Roboto",
            "Noto Sans JP",
            "sans-serif",
          ].join(","),
        },
      },
    },
    // @ts-expect-error this is working properly in @mui/lab@^5.0.0-alpha.60, but is not included in Theme type
    MuiLoadingButton: {
      defaultProps: {
        disableElevation: true,
        variant: "contained",
      },
      styleOverrides: {
        root: {
          borderRadius: 0,
          fontFamily: [
            "Oxanium",
            "Helvetica Neue",
            "Arial",
            "Helvetica",
            "Roboto",
            "Noto Sans JP",
            "sans-serif",
          ].join(","),
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          lineHeight: 1.2,
          borderBottom: `solid 1px hsl(${HDLBaseColor}, ${BasicSaturation}, 88%)`,
        },
        head: {
          fontSize: "1rem",
          fontWeight: "bolder",
          fontFamily: [
            "Oxanium",
            "Helvetica Neue",
            "Arial",
            "Helvetica",
            "Roboto",
            "Noto Sans JP",
            "sans-serif",
          ].join(","),
        },
      },
    },
    MuiPagination: {
      defaultProps: {
        shape: "rounded",
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          maxWidth: "none",
          fontFamily: [
            "Oxanium",
            "Helvetica Neue",
            "Arial",
            "Helvetica",
            "Roboto",
            "Noto Sans JP",
            "sans-serif",
          ].join(","),
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        row: {
          borderBottom: `solid 2px hsl(${HDLBaseColor}, ${BasicSaturation}, 88%)`,
        },
        columnHeader: {
          fontSize: "1rem",
          fontWeight: "bolder",
          fontFamily: [
            "Oxanium",
            "Helvetica Neue",
            "Arial",
            "Helvetica",
            "Roboto",
            "Noto Sans JP",
            "sans-serif",
          ].join(","),
        },
        columnHeaderWrapper: {
          borderBottom: `solid 2px hsl(${HDLBaseColor}, ${BasicSaturation}, 88%)`,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
