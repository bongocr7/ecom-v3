import { Stack } from "@mui/system";
import React from "react";
import StatCard from "./StatCard";

function Statsorders() {
  return (
    <Stack direction="row" justifyContent="space-between">
      <StatCard statnumber="8,5" title="Favorites"></StatCard>
      <StatCard statnumber="5,2" title="Add to bag"></StatCard>
      <StatCard statnumber="1,2" title="Orders"></StatCard>
    </Stack>
  );
}

export default Statsorders;
