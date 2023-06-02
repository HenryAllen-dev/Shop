// import {  Window } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Container,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const CategoryList = () => {
  const categories = useSelector((state) => state.category);
  return (
    <Container>
       <Helmet>
        <title>Dashboard | Categories</title>
      </Helmet>
      <List>
        {categories.map((category) => (
          <Fragment>
            <ListItemButton
              component={Link}
              to={`/dashboard/categories/${category.id}`}
            >
              <ListItem key={category.name}>
                <ListItemIcon>
                  <Avatar variant="square" src={category.image} />
                </ListItemIcon>
                <ListItemText>{category.name}</ListItemText>
              </ListItem>
            </ListItemButton>
            <Divider />
          </Fragment>
        ))}
      </List>
      <Button
        variant="contained"
        component={Link}
        to={`/dashboard/categories/add`}
      >
        Add new category
      </Button>
    </Container>
  );
};

export default CategoryList;
