import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";

function DateGreeting() {
  const current = new Date();
  const date = `${current.getDay()} ${current.toLocaleString("default", {
    month: "long",
  })}, ${current.toLocaleString("default", {
    weekday: "long",
  })}`;
  return (
    <Stack>
      <Stack direction="row" justifyContent="space-between">
        <Typography variant="h6" sx={{ fontWeight: "900" }}>
          Welcome back, Chow!
        </Typography>
        <Button
          variant="text"
          startIcon={<NotificationsIcon sx={{}} />}
        ></Button>
      </Stack>
      <Stack>
        <Typography variant="subtitle">{date}</Typography>
      </Stack>
    </Stack>
  );
}

export default DateGreeting;
