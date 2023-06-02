import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addCategory } from "../../reducers/categorySlice";
import { Box, Button, Container, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import _ from "lodash";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const AddCategory = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [imagePlaceHolder, setImagePlaceHolder] = useState(
    "/images/image-not-found.jpg"
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCategory = {};
    for (let [key, value] of formData.entries()) {
      newCategory[key] = value;
    }
    dispatch(addCategory({ id: _.random(10000), ...newCategory }));
    toast.success("Category Created")
    navigate("/dashboard/categories");
  };

  return (
    <Container>
         <Helmet>
        <title>Dashboard | Add Category</title>
      </Helmet>
      <Grid mt={2} container>
        <Grid p={3} xs={12} md={4}>
          <img
            onError={(e) => {
              e.target.src = "/images/image-not-found.jpg";
            }}
            width="100%"
            src={imagePlaceHolder}
            alt="category"
          />
        </Grid>
        <Grid xs={12} md={8}>
          <form onSubmit={handleSubmit}>
            <TextField
              required
              label="Name"
              sx={{ my: 1 }}
              name="name"
              fullWidth
            />

            <TextField
              label="Picture URL"
              sx={{ my: 1 }}
              name="image"
              onChange={(e) => setImagePlaceHolder(e.target.value)}
              fullWidth
              required
            />

            <Box mb={3}>
              <Button sx={{ px: 4, m: 1 }} variant="contained" type="submit">
                Add Category
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddCategory;
