import { Stack } from "@mui/material";
import React from "react";

function Emptycard({ Width, Height, borderradius, paddingValue }) {
  return (
    <Stack
      sx={{
        border: "2px dashed grey",
        borderRadius: borderradius,
        width: Width,
        height: Height,
        backgroundColor: "white",
        padding: paddingValue,
      }}
    ></Stack>
  );
}

export default Emptycard;
