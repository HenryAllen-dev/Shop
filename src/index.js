import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { CssBaseline } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import "react-toastify/dist/ReactToastify.min.css";
import Theme from "./Theme";
import { HelmetProvider } from "react-helmet-async";
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <HelmetProvider>
      <Theme>
        <CssBaseline />
        <Provider store={store}>
          <RouterProvider router={routes} />
        </Provider>
      </Theme>
    </HelmetProvider>
  </StrictMode>
);
