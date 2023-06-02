import { Box, Button, Container, TextField } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { deleteCategory, editCategory } from "../../reducers/categorySlice";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import NotFoundImage from "../../assets/image-not-found.jpg";

const EditCategories = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const category = useSelector((state) =>
    state.category.find((category) => category.id === Number(id))
  );
  const [imagePlaceHolder, setImagePlaceHolder] = useState(category.image);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCategory = {};
    for (let [key, value] of formData.entries()) {
      updatedCategory[key] = value;
    }
    dispatch(editCategory({ id: Number(id), updatedCategory }));
    toast.info("Category Updated");
    navigate("/dashboard/categories");
  };
  const handleDelete = () => {
    dispatch(deleteCategory(id));
    toast.error("Category Deleted");
    navigate("/dashboard/categories");
  };

  return (
    <Container>
      <Helmet>
        <title>Dashboard | Edit Category</title>
      </Helmet>
      <Grid mt={2} container>
        <Grid p={3} xs={12} md={4}>
          <img
            onError={(e) => {
              e.target.src = NotFoundImage;
            }}
            width="100%"
            src={imagePlaceHolder}
            alt="category"
          />
        </Grid>
        <Grid xs={12} md={8}>
          <form onSubmit={handleSubmit}>
            <TextField
              defaultValue={category.name}
              required
              label="Name"
              sx={{ my: 1 }}
              name="name"
              fullWidth
            />

            <TextField
              label="Picture URL"
              sx={{ my: 1 }}
              defaultValue={imagePlaceHolder}
              name="image"
              onChange={(e) => setImagePlaceHolder(e.target.value)}
              fullWidth
              required
            />

            <Box mb={3}>
              <Button sx={{ px: 4, m: 1 }} variant="contained" type="submit">
                Edit Category
              </Button>
              <Button
                color="error"
                sx={{ px: 4, m: 1 }}
                onClick={handleDelete}
                variant="contained"
                type="button"
              >
                Delete Category
              </Button>
            </Box>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default EditCategories;
