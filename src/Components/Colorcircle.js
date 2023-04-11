import { Button } from "@mui/material";
import React from "react";

function Colorcircle(props) {
  return (
    <Button
      sx={{
        backgroundColor: props.bgcolor,
        borderRadius: "50%",
        width: "50px",
        height: "50px",
      }}
      onClick={props.func}
    ></Button>
  );
}

export default Colorcircle;
