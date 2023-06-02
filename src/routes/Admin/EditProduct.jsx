import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  deleteProduct,
  selectById,
  updateProduct,
} from "../../reducers/productSlice";
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
import { Helmet } from "react-helmet-async";
const EditProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const product = useSelector((state) => selectById(state, id));
  const handleSubmit = (e) => {
    e.preventDefault();
    const { title, price, description, category, rate, picture, off } =
      e.target;
    const updatedProduct = {
      title: title.value,
      price: Number(price.value),
      description: description.value,
      category: Number(category.value),
      rate: Number(rate.value),
      picture: picture.value,
      off: Number(off.value),
    };
    dispatch(updateProduct({ id: product.id, changes: updatedProduct }));
    toast.info("Updated successfully");

    navigate("/dashboard");
  };
  const handleDelete = () => {
    dispatch(deleteProduct(id));
    toast.error("Deleted successfully");
    navigate("/dashboard");
  };
  const categories = useSelector((state) => state.category);
  const [imagePlaceHolder, setImagePlaceHolder] = useState(product.picture);
  return (
    <Container>
         <Helmet>
        <title>Dashboard | Edit Product</title>
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
              label="Title"
              sx={{ my: 1 }}
              name="title"
              defaultValue={product.title}
              fullWidth
            />
            <Select
              name="category"
              sx={{ my: 1 }}
              defaultValue={product.category}
              fullWidth
            >
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
              defaultValue={product.description}
              fullWidth
            />
            <TextField
              label="Picture URL"
              sx={{ my: 1 }}
              name="picture"
              defaultValue={imagePlaceHolder}
              onChange={(e) => setImagePlaceHolder(e.target.value)}
              fullWidth
            />
            <TextField
              label="Price"
              sx={{ my: 1 }}
              type="number"
              name="price"
              InputProps={{ inputProps: { step: 0.01 }, startAdornment: "$" }}
              fullWidth={false}
              defaultValue={product.price}
              helperText="*just 2 decimals"
            />
            <TextField
              label="Rate"
              sx={{ m: 1 }}
              type="number"
              InputProps={{ inputProps: { min: 0, max: 100 } }}
              name="rate"
              fullWidth={false}
              defaultValue={product.rate}
              helperText="*0-100"
            />
            <TextField
              label="Off"
              sx={{ my: 1 }}
              type="number"
              InputProps={{ inputProps: { min: 0, max: 100 } }}
              name="off"
              fullWidth={false}
              defaultValue={product.off}
              helperText="*0-100"
            />
            <Box mb={3}>
              <Button sx={{ px: 4, m: 1 }} variant="contained" type="submit">
                Submit
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={handleDelete}
                type="button"
              >
                Delete
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EditProduct;
