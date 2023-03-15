import Publicroute from "./Routes/Public-Routes/PublicRoutes";
import React from "react";
import styles from "../src/Assets/Styles/App.module.css";
import { Stack } from "@mui/system";

function App() {
  return (
    <Stack className={styles.root}>
      <Publicroute />
    </Stack>
  );
}

export default App;
