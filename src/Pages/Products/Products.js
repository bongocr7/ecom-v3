import { Button, Divider, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import styles from "../../Assets/Styles/Products.module.css";
import PageviewIcon from "@mui/icons-material/Pageview";
import SortIcon from "@mui/icons-material/Sort";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";
import axios from "axios";
import ProductCard from "../../Components/ProductCard";
import AddCircleOutlinedIcon from "@mui/icons-material/AddCircleOutlined";
import { useNavigate } from "react-router-dom";

function Products() {
  const url = "http://localhost:3000/products";
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();

  async function getProduct() {
    try {
      const response = await axios.get(url);
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getProduct();
  }, []);

  console.log(products);

  const productcollection = products.map((ele) => {
    return (
      <ProductCard
        src={ele.thumbnail}
        title={ele.title}
        optioncount="5"
        price={ele.price}
        key={ele.id}
      />
    );
  });

  const handleAddProduct = () => {
    navigate("/AddProduct");
  };

  return (
    <Stack
      direction="column"
      spacing={2}
      className={styles.products}
      sx={{ padding: "5rem 2rem 0 2rem" }}
    >
      <Stack sx={{ position: "absolute", right: "0", top: "32%" }}>
        <Button onClick={handleAddProduct}>
          <AddCircleOutlinedIcon sx={{ fontSize: "4rem" }} />
        </Button>
      </Stack>
      <Stack direction="row" spacing={3} alignItems="center">
        <PageviewIcon sx={{ fontSize: "4rem", color: "rgba(85,73,95,255)" }} />
        <NotificationsOutlinedIcon sx={{ fontSize: "3rem" }} />
      </Stack>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography sx={{ fontWeight: "900" }}>Products</Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{
            borderRadius: "15px",
            padding: "0.5rem 2rem",
            boxShadow: "2",
          }}
        >
          <SortIcon />
          <Divider orientation="vertical" />
          <FilterAltOutlinedIcon />
        </Stack>
      </Stack>
      <Stack direction="row" flexWrap="wrap" sx={{ overflow: "auto" }}>
        {productcollection}
      </Stack>
    </Stack>
  );
}

export default Products;
