import { Stack, Typography } from "@mui/material";
import React from "react";
import Newclients from "../NewClients/Newclients";
import YourProgress from "../Yourprogress/YourProgress";

function Performance() {
  return (
    <Stack
      sx={{
        backgroundColor: "rgb(251,203,99)",
        minWidth: "40%",
        borderRadius: "25px",
        padding: "1rem 1.5rem",
        margin: "1rem",
      }}
    >
      <Typography sx={{ fontWeight: "900" }}>Performance</Typography>
      <Newclients />
      <YourProgress />
    </Stack>
  );
}

export default Performance;
