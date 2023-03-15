import { Stack, Typography } from "@mui/material";
import React from "react";

function SpecificCategoryCard({ title, count, moneycount, color }) {
  return (
    <Stack
      sx={{
        backgroundColor: color,
        borderRadius: "15px",
        color: "white",
        padding: "2rem 1rem",
        width: "100%",
      }}
    >
      <Typography sx={{ fontWeight: "900" }}>{title}</Typography>
      <Stack direction="row" justifyContent="space-between">
        <Typography>{count} items</Typography>
        <Typography>${moneycount} earned</Typography>
      </Stack>
    </Stack>
  );
}

export default SpecificCategoryCard;
