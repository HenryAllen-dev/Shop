import { ThemeProvider, createTheme, responsiveFontSizes } from "@mui/material";
import { useState } from "react";
import { ToggleModeContext } from "./ToggleModeContext";
const Theme = ({ children }) => {
  const [mode, setMode] = useState("dark");
  let theme = createTheme({
    palette: { primary: { main: "#00B8FC" }, mode },
    typography: { fontFamily: "roboto" },
  });
  theme = responsiveFontSizes(theme);

  return (
    <ToggleModeContext.Provider value={{ mode, setMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ToggleModeContext.Provider>
  );
};
export default Theme;
