import { useRoutes } from "react-router-dom";
import Dashboard from "../../Pages/Dashboard/Dashboard.js";
import Products from "../../Pages/Products/Products.js";
import Customers from "../../Pages/Customers/Customers.js";
import Reviews from "../../Pages/Reviews/Reviews.js";
import Settings from "../../Pages/Settings/Settings.js";
import Home from "../../Pages/Home/Home.js";
import AddProduct from "../../Pages/AddProduct/AddProduct.js";

export default function Publicroute() {
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
      children: [
        {
          path: "Dashboard",
          element: <Dashboard />,
        },
        {
          path: "Products",
          element: <Products />,
        },
        {
          path: "Customers",
          element: <Customers />,
        },
        {
          path: "Reviews",
          element: <Reviews />,
        },
        {
          path: "Settings",
          element: <Settings />,
        },
      ],
    },
    {
      path: "AddProduct",
      element: <AddProduct />,
    },
  ]);
  return element;
}
