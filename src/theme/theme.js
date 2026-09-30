import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#176B87", contrastText: "#fff" },
    secondary: { main: "#2A9D8F", contrastText: "#fff" },
    success: { main: "#238636" },
    warning: { main: "#D99000" },
    background: { default: "#F6FAFC", paper: "#FFFFFF" },
    text: { primary: "#17324D", secondary: "#607589" }
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Arial", sans-serif',
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 750 },
    h4: { fontWeight: 750 },
    button: { textTransform: "none", fontWeight: 700 }
  },
  shape: { borderRadius: 14 },
  components: {
    MuiButton: { defaultProps: { disableElevation: true } },
    MuiCard: { styleOverrides: { root: { border: "1px solid #E5EDF2" } } }
  }
});

export default theme;
