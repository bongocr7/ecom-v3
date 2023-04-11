import { Button, Stack } from "@mui/material";
import React from "react";

function AvailableSizeCard({ sizename, func }) {
  return (
    <Stack direction="column" alignItems="center">
      <Button
        sx={{
          backgroundColor: "white",
          borderRadius: "15px",
          padding: "1rem 2rem",
          color: "black",
          width: "100px",
        }}
        onClick={func}
      >
        {sizename}
      </Button>
    </Stack>
  );
}

export default AvailableSizeCard;
