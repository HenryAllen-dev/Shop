import { Search } from "@mui/icons-material";
import {
  Box,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Paper,
  TextField,
  ListItemAvatar,
  Avatar,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { selectAll } from "../reducers/productSlice";
import _ from "lodash";

const Searchbar = () => {
  const inputRef = useRef();
  const products = useSelector(selectAll);
  const [, setSearchBar] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState([...products]);
  useEffect(() => {
    if (searchParams.has("search")) {
      inputRef.current.focus();
      inputRef.current.value = searchParams.get("search");
      handleSearchBar(searchParams.get("search"));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSearchBar = _.debounce((searchValue) => {
    setSearchBar(searchValue);
    if (searchValue.length > 0) {
      setSearchParams((prevParams) => {
        prevParams.set("search", searchValue.toLowerCase());
        return prevParams;
      });
      setFilteredProducts(
        products.filter((p) =>
          p.title.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    } else {
      setFilteredProducts([...products]);
      setSearchParams((prevParams) => {
        prevParams.delete("search");
        return prevParams;
      });
    }
  }, 1000);
  const resetSearch = () => {
    setFilteredProducts([...products]);
    setSearchParams((prevParams) => {
      prevParams.delete("search");
      return prevParams;
    });
    setSearchBar("");
    inputRef.current.value = "";
  };

  const handleInputChange = (e) => {
    const searchValue = e.target.value;
    handleSearchBar(searchValue);
  };
  return (
    <Box position="relative">
      <TextField
        inputRef={inputRef}
        onChange={handleInputChange}
        placeholder="Search Products..."
        sx={{ p: 1 }}
        fullWidth
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Search />
            </InputAdornment>
          ),
        }}
      />
      <Box
        display={searchParams.has("search") ? "block" : "none"}
        zIndex={100}
        width={"100%"}
        position="absolute"
      >
        <Paper elevation={4}>
          <List dense>
            {filteredProducts.length === 0 ? (
              <ListItem>
                <ListItemText>Sorry we don't have this product :(</ListItemText>
              </ListItem>
            ) : (
              filteredProducts.map((product) => (
                <ListItem key={product.title}>
                  <ListItemButton
                    onClick={resetSearch}
                    component={Link}
                    to={`/products/${product.id}`}
                  >
                    <ListItemAvatar>
                      <Avatar src={product.picture} alt="product" />
                    </ListItemAvatar>
                    <ListItemText>{product.title}</ListItemText>
                  </ListItemButton>
                </ListItem>
              ))
            )}
          </List>
        </Paper>
      </Box>
    </Box>
  );
};

export default Searchbar;
