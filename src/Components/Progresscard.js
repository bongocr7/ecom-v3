import { Stack, Typography } from "@mui/material";
import React from "react";
import CustomizedProgressBars from "./Progressbar";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShowChartIcon from "@mui/icons-material/ShowChart";

function Progresscard({
  title,
  moneycount,
  ordercount,
  plpercentage,
  typeOfPercentage,
}) {
  let txtcolor = "";
  let bgcolor = "";

  if (typeOfPercentage === "gain") {
    txtcolor = "rgba(76,161,143,255)";
    bgcolor = "rgba(171,219,209,255)";
  } else {
    txtcolor = "rgba(216,142,143,255)";
    bgcolor = "rgba(255,228,228,255)";
  }

  return (
    <Stack
      spacing={2}
      sx={{ bgcolor: "white", padding: "1rem", borderRadius: "25px" }}
    >
      <Stack direction="row" justifyContent="space-between">
        <Typography sx={{ fontWeight: "900" }}>{title}</Typography>
        <Typography sx={{ fontWeight: "900" }}>
          {"$ " + moneycount + "K"}
        </Typography>
      </Stack>

      <CustomizedProgressBars />

      <Stack direction="row" justifyContent="space-between">
        <Stack direction="row" alignItems="center" spacing={2}>
          <ShoppingCartIcon />
          <Stack sx={{ textAlign: "center" }} direction="row" spacing={1}>
            <Typography sx={{ fontWeight: "200" }}>{ordercount}</Typography>
            <Typography sx={{ fontWeight: "200" }}>Orders</Typography>
          </Stack>
        </Stack>
        <Stack
          sx={{
            bgcolor: bgcolor,
            borderRadius: "15px",
            padding: "0.5rem",
            color: txtcolor,
          }}
          direction="row"
          alignItems="center"
        >
          <ShowChartIcon />
          <Typography variant="h6" sx={{ fontWeight: "900" }}>
            {plpercentage}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Progresscard;
