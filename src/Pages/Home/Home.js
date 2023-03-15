import React from "react";
import { Stack, Button, TextField, Typography } from "@mui/material";
import styles from "../../Assets/Styles/Home.module.css";
import Navbar from "../../Layouts/Navbar/Navbar";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <>
      <Stack direction="row" className={styles.NavOutletContainer}>
        <Navbar />
        <Outlet />
      </Stack>
    </>
  );
}

export default Home;
