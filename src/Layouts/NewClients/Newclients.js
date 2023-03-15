import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import AvatarCard from "../../Components/AvatarCard";
import axios from "axios";

function Newclients() {
  const url = "http://localhost:3000/users";
  const [users, setUsers] = useState([]);

  async function getUser() {
    try {
      const response = await axios.get(url);
      setUsers(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  const avatar = users.slice(0, 4).map((ele) => {
    return (
      <AvatarCard name={ele.firstName + " " + ele.lastName} src={ele.image} />
    );
  });

  return (
    <Stack>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ paddingTop: "5px" }}
      >
        <Typography variant="h6" sx={{ fontWeight: "900" }}>
          New clients
        </Typography>

        <Button sx={{ color: "black" }}>see all</Button>
      </Stack>
      <Stack direction="row" spacing={2}>
        {avatar}
      </Stack>
    </Stack>
  );
}

export default Newclients;
