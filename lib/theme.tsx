import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

// Create a theme instance.
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 762,
      lg: 1024,
      xl: 1280,
    },
  },
  typography: {
    fontSize: 16,
  },
 palette: {
  primary: {
    main: "#343A40",
    light: "#6C757D"
  },
  secondary: {
    main: "#fff",
  },
  error: {
    main: red.A400,
  },
  background: {
    default: "#FFFFFF",
  },
  text: {
    primary: "#000000",
    secondary: "#000000",
    disabled: "#000000",
  },
 }
});

export default theme;
