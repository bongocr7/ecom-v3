import { Button, Stack, Typography } from "@mui/material";
import React from "react";

function SeasonCard({ seasonname, iconname, func, Color }) {
  return (
    <Stack direction="column" alignItems="center">
      <Button
        sx={{
          backgroundColor: "white",
          borderRadius: "15px",
          padding: "1rem 5.8rem",
          color: "black",
          width: "100px",
        }}
        onClick={func}
      >
        <Stack direction="column" sx={{ color: Color }} alignItems="center">
          {iconname}
          <Typography>{seasonname}</Typography>
        </Stack>
      </Button>
    </Stack>
  );
}

export default SeasonCard;
