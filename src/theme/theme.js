import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefffe",
    },
    secondary: {
      main: "#6a719a",
    },
    black: {
      main: "#000000",
    },
  },
  typography: {
    fontFamily: [
      "HelveticaNowDisplay",
      "Unison-Pro-Bold",
      "Unison-Pro-Light",
      "Roboto",
      "Arial",
      "sans-serif",
    ],
  },
});

export default theme;
