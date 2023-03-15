import { Stack, Typography } from "@mui/material";
import React from "react";

function StatCard({ statnumber, title }) {
  return (
    <Stack
      sx={{
        textAlign: "center",
        border: "1px solid grey",
        borderRadius: "15px",
        padding: "1rem",
        width: "30%",
      }}
    >
      <Typography sx={{ fontWeight: "900" }}>
        {"+" + statnumber + "k"}
      </Typography>
      <Typography>{title}</Typography>
    </Stack>
  );
}

export default StatCard;
