import { Stack } from "@mui/system";
import React from "react";
import styles from "../../Assets/Styles/Dashboard.module.css";
import Performance from "../../Layouts/Performance/Performance";
import Greeting from "../../Layouts/Greeting/Greeting";

function Dashboard() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      className={styles.dashboard}
    >
      <Greeting />
      <Performance />
    </Stack>
  );
}

export default Dashboard;
