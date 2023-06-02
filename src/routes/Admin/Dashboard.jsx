import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import { selectAll } from "../../reducers/productSlice";
import { Link } from "react-router-dom";
import {
  Add,
  Description,
  EditNote,
  ExpandMore,
  NoPhotography,
  OpenInNew,
  Percent,
  Search,
  Sell,
  Settings,
  Star,
  Window,
} from "@mui/icons-material";
import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { categoryIdtoName } from "../../categoryIdtoName";
import DashboardChart from "../../components/DashboardChart";
import { Helmet } from "react-helmet-async";
const Dashboard = () => {
  const products = useSelector(selectAll);
  const [filteredProducts, setFilteredProducts] = useState([...products]);
  const handleSearch = (e) => {
    setFilteredProducts([
      ...products.filter((p) =>
        p.title.toLowerCase().includes(e.target.value.toLowerCase())
      ),
    ]);
  };
  return (
    <Box p={2}>
         <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Box p={2} m={2}>
        <DashboardChart />
      </Box>
      <Grid display="flex" alignItems="center" container>
        <Grid xs={12} md={10}>
          <TextField
            fullWidth
            onChange={handleSearch}
            placeholder="Search Products..."
            sx={{ p: 1 }}
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid xs={12} md={2}>
          <Button
            fullWidth
            size="small"
            component={Link}
            variant="contained"
            to="/dashboard/add"
          >
            <Add /> Add new product
          </Button>
          <Button
            fullWidth
            size="small"
            sx={{ my: 1 }}
            component={Link}
            variant="contained"
            to="/dashboard/categories"
          >
            <EditNote /> Edit categories
          </Button>
        </Grid>
      </Grid>
      {filteredProducts.length === 0 ? (
        <Typography p={3} variant="h5">
          There is not any products...
        </Typography>
      ) : (
        filteredProducts.map((product) => (
          <Accordion key={product.title} sx={{ my: 1 }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Avatar sx={{ mx: 1 }} src={product.picture} alt="product">
                <NoPhotography />
              </Avatar>
              <Typography
                variant="h6"
                sx={{ display: "flex", alignItems: "center" }}
              >
                {product.title}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component="span" variant="body1">
                <Description color="primary" sx={{ verticalAlign: "middle" }} />
                &nbsp;{product.description}
              </Typography>
              <Box display="flex">
                <Typography
                  component="span"
                  m={1}
                  display="flex"
                  variant="body1"
                >
                  <Sell color="primary" /> &nbsp;
                  <Typography fontWeight="bold">{product.price}$</Typography>
                </Typography>
                <Typography
                  component="span"
                  m={1}
                  display="flex"
                  variant="body1"
                >
                  <Percent color="primary" /> &nbsp;
                  <Typography fontWeight="bold">{product.off}%</Typography>
                </Typography>
                <Typography
                  component="span"
                  m={1}
                  display="flex"
                  variant="body1"
                >
                  <Star color="primary" /> &nbsp;
                  <Typography fontWeight="bold">{product.rate}</Typography>
                </Typography>
                <Typography
                  component="span"
                  m={1}
                  display="flex"
                  variant="body1"
                >
                  <Window color="primary" /> &nbsp;
                  <Typography fontWeight="bold">
                    {categoryIdtoName(product.category)}
                  </Typography>
                </Typography>
              </Box>
              <Box display="flex" pt={1}>
                <Button
                  component={Link}
                  to={`/products/${product.id}`}
                  variant="outlined"
                  size="small"
                  sx={{ display: "flex", alignItems: "center", mx: 1 }}
                >
                  <Box display="flex" alignItems="center" mx={1}>
                    <OpenInNew />
                  </Box>
                  <Box>Visit </Box>
                </Button>
                <Button
                  component={Link}
                  to={`/dashboard/${product.id}`}
                  variant="outlined"
                  size="small"
                  sx={{ display: "flex", alignItems: "center", mx: 1 }}
                >
                  <Box display="flex" alignItems="center" mx={1}>
                    <Settings />
                  </Box>
                  <Box>Edit </Box>
                </Button>
              </Box>
            </AccordionDetails>
          </Accordion>
        ))
      )}
    </Box>
  );
};

export default Dashboard;
