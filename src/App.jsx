import { Badge, Box, Fab } from "@mui/material";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import Breadcrumb from "./components/common/Breadcrumb";
import { ToastContainer } from "react-toastify";
import { ShoppingCart } from "@mui/icons-material";
import { toggleCart } from "./reducers/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./routes/client/Cart";
import { useTheme } from "@emotion/react";
const App = () => {
  const cartTotalQty = useSelector((state) => state.cart.cartTotalQty);
  const { palette } = useTheme();
  const dispatch = useDispatch();
  return (
    <Box>
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={palette.mode}
      />
      <Cart />
      <Header />
      <Box mt={2}>
        <Breadcrumb />
        <Fab
          onClick={() => {
            dispatch(toggleCart());
          }}
          color="primary"
          sx={{ position: "fixed", bottom: 15, right: 15 }}
        >
          <Badge badgeContent={cartTotalQty}>
            <ShoppingCart />
          </Badge>
        </Fab>
        <Outlet />
      </Box>
    </Box>
  );
};

export default App;
