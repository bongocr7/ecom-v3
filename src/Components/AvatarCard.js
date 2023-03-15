import { Stack, Typography } from "@mui/material";
import React from "react";

function AvatarCard({ name, src }) {
  return (
    <Stack
      direction="column"
      alignItems="center"
      sx={{ width: "30%", textAlign: "center" }}
    >
      <img src={src} alt="" width={75} />
      <Typography>{name}</Typography>
    </Stack>
  );
}

export default AvatarCard;
