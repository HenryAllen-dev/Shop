import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../reducers/productSlice";
import {
  Box,
  Button,
  Container,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { nanoid } from "@reduxjs/toolkit";
import { Helmet } from "react-helmet-async";
const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, price, description, category, rate, picture, off } =
      e.target;
    const newProduct = {
      id: nanoid(),
      title: title.value,
      price: Number(price.value),
      description: description.value,
      category: Number(category.value),
      rate: Number(rate.value),
      picture: picture.value,
      off: Number(off.value),
    };
    dispatch(addProduct({ ...newProduct, id: nanoid() }));
    toast.success("Created successfully");

    navigate("/dashboard");
  };
  const categories = useSelector((state) => state.category);
  const [imagePlaceHolder, setImagePlaceHolder] = useState(
    "/images/image-not-found.jpg"
  );
  return (
    <Container>
        <Helmet>
        <title>Dashboard | Add Product</title>
      </Helmet>
      <Grid mt={2} container>
        <Grid p={3} xs={12} md={4}>
          <img
            onError={(e) => {
              e.target.src = "/images/image-not-found.jpg";
            }}
            width="100%"
            src={imagePlaceHolder}
            alt="product"
          />
        </Grid>
        <Grid xs={12} md={8}>
          <form onSubmit={handleSubmit}>
            <TextField
              required
              label="Title"
              sx={{ my: 1 }}
              name="title"
              fullWidth
            />
            <Select required name="category" sx={{ my: 1 }} fullWidth>
              {categories.map((category) => (
                <MenuItem key={category.name} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
            <TextField
              label="Description"
              sx={{ my: 1 }}
              multiline
              name="description"
              fullWidth
              required
            />
            <TextField
              label="Picture URL"
              sx={{ my: 1 }}
              name="picture"
              onChange={(e) => setImagePlaceHolder(e.target.value)}
              fullWidth
              required
            />
            <TextField
              label="Price"
              sx={{ my: 1 }}
              type="number"
              name="price"
              InputProps={{ inputProps: { step: 0.01 }, startAdornment: "$" }}
              fullWidth={false}
              helperText="*just 2 decimals"
              required
            />
            <TextField
              label="Rate"
              sx={{ m: 1 }}
              type="number"
              InputProps={{ inputProps: { min: 0, max: 100 } }}
              name="rate"
              fullWidth={false}
              helperText="*0-100"
              required
            />
            <TextField
              label="Off"
              sx={{ my: 1 }}
              type="number"
              InputProps={{ inputProps: { min: 0, max: 100 } }}
              name="off"
              fullWidth={false}
              helperText="*0-100"
              required
            />
            <Box mb={3}>
              <Button sx={{ px: 4, m: 1 }} variant="contained" type="submit">
                Add product
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddProduct;
