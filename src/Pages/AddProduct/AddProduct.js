import { Stack, Typography } from "@mui/material";
import React from "react";
import styles from "../../Assets/Styles/AddProduct.module.css";

function AddProduct() {
  const handleSubmit = () => {
    console.log("hello");
  };
  return (
    <Stack className={styles.addproduct}>
      <Stack>
        <Stack></Stack>
        <Stack>
          <form onSubmit={handleSubmit}></form>
        </Stack>
      </Stack>
      <Stack></Stack>
    </Stack>
  );
}

export default AddProduct;
