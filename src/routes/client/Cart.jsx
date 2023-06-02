import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Modal,
  Paper,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseCart,
  getTotals,
  removeFromCart,
  resetCart,
  toggleCart,
} from "../../reducers/cartSlice";
import {
  Add,
  Close,
  NoPhotography,
  Remove,
  ShoppingCart,
} from "@mui/icons-material";
import { useEffect } from "react";
import { useTheme } from "@emotion/react";
const Cart = () => {
  const { success } = useTheme().palette;
  const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);
  const cartTotalQty = useSelector((state) => state.cart.cartTotalQty);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTotals());
  }, [cartItems, dispatch]);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: { xs: "100%", md: "60%" },
    p: 3,
  };
  return (
    <Modal open={isCartOpen} onClose={() => dispatch(toggleCart())}>
      <Paper sx={style}>
        <List dense>
          {cartItems.length === 0 ? (
            <ListItem>
              <ListItemText>
                <Typography variant="h6">Your cart is empty!</Typography>
              </ListItemText>
            </ListItem>
          ) : (
            cartItems.map((cartItem) => (
              <ListItem key={cartItem.title}>
                <ListItemAvatar>
                  <Avatar
                    sizes="large"
                    sx={{ width: 60, height: 60, m: 1 }}
                    src={cartItem.picture}
                    alt="product"
                  >
                    <NoPhotography />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText>
                  <Typography variant="h6">{cartItem.title}</Typography>
                  <Typography color={success.main}>
                    {(
                      ((100 - cartItem.off) *
                        cartItem.price *
                        cartItem.cartQty) /
                      100
                    ).toFixed(2)}
                    $
                  </Typography>
                </ListItemText>
                <ButtonGroup variant="contained">
                  <ListItemButton
                    onClick={() => dispatch(decreaseCart(cartItem))}
                  >
                    <Remove />
                  </ListItemButton>
                  <ListItemText>
                    <Typography variant="h6">{cartItem.cartQty}</Typography>
                  </ListItemText>
                  <ListItemButton onClick={() => dispatch(addToCart(cartItem))}>
                    <Add />
                  </ListItemButton>
                  <ListItemButton
                    onClick={() => dispatch(removeFromCart(cartItem))}
                  >
                    <Close />
                  </ListItemButton>
                </ButtonGroup>
              </ListItem>
            ))
          )}

          {cartItems.length !== 0 ? (
            <>
              <Box justifyContent="space-between" display="flex">
                <Box display="flex">
                  <Typography color="primary" variant="h6">
                    Amount:
                  </Typography>

                  <Typography px={1} variant="h6">
                    {cartTotalAmount}$
                  </Typography>
                </Box>
                <Box display="flex">
                  <Typography color="primary" variant="h6">
                    Quantity:
                  </Typography>
                  <Typography px={1} variant="h6">
                    {cartTotalQty}
                  </Typography>
                </Box>
              </Box>
              <Button
                sx={{ px: 5, m: 1 }}
                size="large"
                variant="contained"
                color="success"
                fullWidth
                onClick={() => {
                  dispatch(resetCart());
                }}
              >
                <ShoppingCart /> Checkout
              </Button>
            </>
          ) : null}
        </List>
      </Paper>
    </Modal>
  );
};

export default Cart;
