import { Stack, Typography } from "@mui/material";
import React from "react";

function ProductCard({ src, title, optioncount, price }) {
  return (
    <Stack
      direction="column"
      justifyContent="space-between"
      sx={{
        margin: "1rem",
        boxShadow: "2",
        borderRadius: "15px",
      }}
    >
      <Stack>
        <img
          src={src}
          alt=""
          width="400px"
          height="300px"
          style={{ borderRadius: "15px" }}
        />
      </Stack>
      <Stack sx={{ padding: "1rem" }}>
        <Typography>{title}</Typography>
        <Stack direction="row" justifyContent="space-between">
          <Typography>{optioncount} options</Typography>
          <Typography sx={{ color: "rgb(251,203,99)" }}>${price}</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default ProductCard;
