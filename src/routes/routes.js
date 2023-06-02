import {
  Route,
  createHashRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "../App";
import Error from "./client/Error";
import Home from "./client/Home";
import Categories from "./client/Categories";
import Products from "./client/Products";
import Product from "./client/Product";
import Contact from "./client/Contact";
import About from "./client/About";
import Dashboard from "./Admin/Dashboard";
import EditProduct from "./Admin/EditProduct";
import AddProduct from "./Admin/AddProduct";
import EditCategories from "./Admin/EditCategories";
import CategoryList from "./Admin/CategoryList";
import AddCategory from "./Admin/AddCategory";
import {
  Home as HomeIcon,
  Info,
  Mouse,
  Person,
  Window,
  Dashboard as DashboardIcon,
} from "@mui/icons-material";
// HashRouter for gh-pages...
export const routes = createHashRouter(
  createRoutesFromElements(
    <>
      <Route element={<App />} errorElement={<Error />}>
        <Route path="/" element={<Home />} />,
        <Route path="/about" element={<About />} />,
        <Route path="/contact" element={<Contact />} />,
        <Route path="/categories" element={<Categories />} />,
        <Route path="/products" element={<Products />} />,
        <Route path="/products/:id" element={<Product />} />,
        <Route path="/dashboard" element={<Dashboard />} />,
        <Route path="/dashboard/:id" element={<EditProduct />} />,
        <Route path="/dashboard/add" element={<AddProduct />} />,
        <Route path="/dashboard/categories" element={<CategoryList />} />,
        <Route path="/dashboard/categories/:id" element={<EditCategories />} />,
        <Route path="/dashboard/categories/add" element={<AddCategory />} />,
      </Route>
    </>
  )
);
export const navArray = [
  { name: "Home", path: "/", icon: <HomeIcon /> },
  { name: "About", path: "/about", icon: <Info /> },
  { name: "Contact", path: "/contact", icon: <Person /> },
  { name: "Categories", path: "/categories", icon: <Window /> },
  { name: "Products", path: "/products", icon: <Mouse /> },
  { name: "Dashboard", path: "/dashboard", icon: <DashboardIcon /> },
];
