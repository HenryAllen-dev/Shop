import { createContext } from "react";

export const ToggleModeContext = createContext({
  mode: "",
  setMode: () => {},
});
