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
        'Roboto', 
        'Unison-Pro-Bold',
        'Helvetica', 
        'Arial', 
        'sans-serif',
    ] 
    
  },
});

export default theme;
