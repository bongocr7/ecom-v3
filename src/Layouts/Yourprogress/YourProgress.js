import { Typography } from "@mui/material";
import { Stack } from "@mui/material";
import React from "react";
import Progresscard from "../../Components/Progresscard";

function YourProgress() {
  return (
    <Stack spacing={2}>
      <Typography variant="h6" sx={{ fontWeight: "900" }}>
        Your Progress
      </Typography>
      <Stack spacing={5}>
        <Progresscard
          title="Total Income"
          moneycount="15,5"
          ordercount="150"
          plpercentage="15%"
          typeOfPercentage="gain"
        />
        <Progresscard
          title="Worst Selling"
          moneycount="5,3"
          ordercount="85"
          plpercentage="10%"
          typeOfPercentage="loss"
        />
        <Progresscard
          title="Total Income"
          moneycount="10,4"
          ordercount="65"
          plpercentage="45%"
          typeOfPercentage="gain"
        />
      </Stack>
    </Stack>
  );
}

export default YourProgress;
