import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

function Producttypecard({ typename, iconname, func }) {
  return (
    <Stack direction="column" alignItems="center">
      <Button
        sx={{
          backgroundColor: "white",
          borderRadius: "15px",
          padding: "0.5rem 2rem",
        }}
        onClick={func}
      >
        {iconname}
      </Button>
      <Typography>{typename}</Typography>
    </Stack>
  );
}

export default Producttypecard;
