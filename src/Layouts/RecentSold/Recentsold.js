import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import ImageCard from "../../Components/ImageCard";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import KitchenIcon from "@mui/icons-material/Kitchen";
import SpecificCategoryCard from "../../Components/SpecificCategoryCard";

function Recentsold() {
  return (
    <Stack sx={{ maxWidth: "100%", minHeight: "50%" }}>
      <Typography sx={{ fontWeight: "900" }}>Recent Sold</Typography>
      <Stack direction="row" justifyContent="space-between">
        <Stack>
          <ImageCard
            source="https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt="purse"
            width="98%"
            height="100%"
            titleOfImage="Bang bag"
            sale="1,5"
          />
        </Stack>
        <Stack spacing={2}>
          <Stack direction="row" spacing={2}>
            <ShoppingBagIcon
              sx={{
                backgroundColor: "grey",
                color: "white",
                fontSize: "800%",
                borderRadius: "50%",
                padding: "1rem",
              }}
            />
            <KitchenIcon
              sx={{
                backgroundColor: "grey",
                color: "white",
                fontSize: "800%",
                borderRadius: "50%",
                padding: "1rem",
              }}
            />
          </Stack>
          <SpecificCategoryCard
            title="Dresses"
            count="25"
            moneycount="3,5"
            color="rgba(228,177,176,255)"
          />
          <SpecificCategoryCard
            title="Mobile"
            count="15"
            moneycount="3,5"
            color="rgba(228,177,17,255)"
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Recentsold;
