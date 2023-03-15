import { Stack, Typography } from "@mui/material";
import React from "react";

function VisitorCountCard() {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{
        backgroundColor: "rgb(236,139,126)",
        height: "10rem",
        padding: "0.5rem",
        borderRadius: "25px",
        color: "white",
      }}
    >
      <Stack>
        <Typography sx={{ fontWeight: "900" }}>Good Job!</Typography>
        <Typography>
          You have over 20000 vistors in the last 10 days. Keep it up!
        </Typography>
      </Stack>
      <img
        src="https://www.freeiconspng.com/thumbs/cart-icon/basket-cart-icon-27.png"
        alt=""
        width={100}
        height={100}
      />
    </Stack>
  );
}

export default VisitorCountCard;
