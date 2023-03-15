import { Stack } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../../Assets/Styles/Navbar.module.css";
import Avatar from "@mui/material/Avatar";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import { Button } from "@mui/material";
import Inventory2 from "@mui/icons-material/Inventory2";
import PeopleIcon from "@mui/icons-material/People";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";

function Navbar() {
  return (
    <Stack
      direction="column"
      className={styles.navbar}
      justifyContent="space-around"
    >
      <Stack spacing={2}>
        <Avatar
          alt="Chow-Chow"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREsjDtKvi0s7nKp44XsenZYw5w0CZM69oY-w&usqp=CAU"
          sx={{ width: 100, height: 100, marginLeft: 2 }}
        />
        <Stack spacing={2}>
          <NavLink to="Dashboard">
            <Button
              variant="text"
              startIcon={<DonutSmallIcon />}
              className={styles.button}
              sx={{ fontWeight: "900" }}
            >
              Dashboard
            </Button>
          </NavLink>
          <NavLink to="Products">
            <Button
              variant="text"
              startIcon={<Inventory2 />}
              className={styles.button}
              sx={{ fontWeight: "900" }}
            >
              Products
            </Button>
          </NavLink>
          <NavLink to="Customers">
            <Button
              variant="text"
              startIcon={<PeopleIcon />}
              className={styles.button}
              sx={{ fontWeight: "900" }}
            >
              Customers
            </Button>
          </NavLink>
          <NavLink to="Reviews">
            <Button
              variant="text"
              className={styles.button}
              startIcon={<MapsUgcIcon />}
              sx={{ fontWeight: "900" }}
            >
              Reviews
            </Button>
          </NavLink>
          <NavLink to="Settings">
            <Button
              variant="text"
              className={styles.button}
              startIcon={<SettingsIcon />}
              sx={{ fontWeight: "900" }}
            >
              Settings
            </Button>
          </NavLink>
        </Stack>
      </Stack>
      <NavLink to="Logout">
        <Button
          variant="text"
          className={styles.button}
          startIcon={<LogoutIcon />}
          sx={{ fontWeight: "900" }}
        >
          Logout
        </Button>
      </NavLink>
    </Stack>
  );
}

export default Navbar;
