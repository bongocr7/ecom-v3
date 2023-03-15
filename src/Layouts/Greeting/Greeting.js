import { Stack } from "@mui/system";
import React from "react";
import DateGreeting from "../../Components/DateGreeting";
import Statsorders from "../../Components/Statsorders";
import VisitorCountCard from "../../Components/VisitorCountCard";
import Recentsold from "../RecentSold/Recentsold";

function Greeting() {
  return (
    <Stack spacing={2} sx={{ marginTop: "2rem" }}>
      <DateGreeting />
      <VisitorCountCard />
      <Statsorders />
      <Recentsold />
    </Stack>
  );
}

export default Greeting;
