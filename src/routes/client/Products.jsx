import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  Slider,
  Stack,
} from "@mui/material";
import { useSearchParams } from "react-router-dom";
import { selectAll } from "../../reducers/productSlice";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import { useEffect, useState } from "react";
import ProductCard from "../../components/common/ProductCard";
import { Helmet } from "react-helmet-async";
const Products = () => {
  const products = useSelector(selectAll);
  const categories = useSelector((state) => state.category);
  const [finishedFilter, setFilteredProducts] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    let filteredProducts = [...products];
    const selectedCategory = searchParams.get("category");
    const selectedPrice = searchParams.get("price");
    const selectedSort = searchParams.get("sort");
    if (selectedCategory) {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === Number(selectedCategory)
      );
      setFilteredProducts(filteredProducts);
    }
    if (selectedSort) {
      switch (selectedSort) {
        case "most-popular":
          filteredProducts = filteredProducts.sort((a, b) => b.rate - a.rate);
          setFilteredProducts([...filteredProducts]);
          break;
        case "price-low-to-high":
          filteredProducts = filteredProducts.sort((a, b) => a.price - b.price);
          setFilteredProducts([...filteredProducts]);
          break;
        case "price-high-to-low":
          filteredProducts = filteredProducts.sort((a, b) => b.price - a.price);
          setFilteredProducts([...filteredProducts]);
          break;
        default:
      }
    }
    if (selectedPrice) {
      filteredProducts = filteredProducts.filter(
        (product) => product.price <= Number(selectedPrice)
      );
      setFilteredProducts(filteredProducts);
    }
    if (!selectedPrice && !selectedCategory && !selectedSort) {
      setFilteredProducts([...products]);
    }
  }, [searchParams, products]);

  return (
    <Grid container p={2}>
      <Helmet>
        <title>Products</title>
      </Helmet>
      <Grid xs={12} md={3}>
        <Box borderRadius={4} p={2} border="1px solid gray">
          <Typography variant="h5">
            Filters
            <Button onClick={() => setSearchParams({})}>remove filters</Button>
          </Typography>
          <Typography mt={2} variant="h5">
            <FormControl fullWidth>
              <InputLabel id="category-select">Category</InputLabel>
              <Select
                labelId="category-select"
                id="category-select"
                value={searchParams.get("category") ?? ""}
                label="Category"
                onChange={(e) => {
                  e.target.value
                    ? setSearchParams((prevParams) => {
                        prevParams.set("category", e.target.value);
                        return prevParams;
                      })
                    : setSearchParams((prevParams) => {
                        prevParams.delete("category");
                        return prevParams;
                      });
                }}
              >
                <MenuItem value={""}>
                  <em>All products</em>
                </MenuItem>
                {categories.map((category) => (
                  <MenuItem
                    selected={searchParams.get("category") === category.id}
                    key={category.name}
                    value={category.id}
                  >
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Typography>
          <Typography mt={2} variant="h5">
            Price
          </Typography>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <Typography>0$</Typography>
            <Slider
              min={1}
              step={1}
              value={Math.cbrt(searchParams.get("price")) || 25}
              valueLabelDisplay="on"
              scale={(value) => value ** 3}
              max={25}
              onChange={(e) => {
                e.target.value
                  ? setSearchParams((prevParams) => {
                      prevParams.set("price", e.target.value ** 3);
                      return prevParams;
                    })
                  : setSearchParams((prevParams) => {
                      prevParams.delete("price");
                      return prevParams;
                    });
              }}
            />
            <Typography>15K$</Typography>
          </Stack>
          <FormControl fullWidth>
            <InputLabel id="sort-select">Sort by</InputLabel>
            <Select
              labelId="sort-select"
              id="sort-select"
              value={searchParams.get("sort") ?? ""}
              label="Sort by"
              onChange={(e) => {
                e.target.value
                  ? setSearchParams((prevParams) => {
                      prevParams.set("sort", e.target.value);
                      return prevParams;
                    })
                  : setSearchParams((prevParams) => {
                      prevParams.delete("sort");
                      return prevParams;
                    });
              }}
            >
              <MenuItem value={""}>
                <em>All products</em>
              </MenuItem>
              <MenuItem
                selected={searchParams.get("sort") === "most-popular"}
                value={"most-popular"}
              >
                Most popular
              </MenuItem>
              <MenuItem
                selected={searchParams.get("sort") === "price-low-to-high"}
                value={"price-low-to-high"}
              >
                Price: Low to high
              </MenuItem>
              <MenuItem
                selected={searchParams.get("sort") === "price-high-to-low"}
                value={"price-high-to-low"}
              >
                Price: High to low
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>
      <Grid xs={12} md={9}>
        <Box
          display="flex"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="stretch"
        >
          {finishedFilter.map((item) => (
            <Box key={item.title} m={2}>
              <ProductCard item={item} />
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default Products;
