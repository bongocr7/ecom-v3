import { Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import styles from "../Assets/Styles/Image.module.css";

function ImageCard({ source, alt, width, height, titleOfImage, sale }) {
  return (
    <Stack sx={{ position: "relative" }}>
      <img
        src={source}
        alt={alt}
        width={width}
        height={height}
        className={styles.img}
      />
      <Stack sx={{ position: "absolute", bottom: "10px", left: "10px" }}>
        <Typography>{titleOfImage}</Typography>
        <Typography>${sale}k earned</Typography>
      </Stack>
    </Stack>
  );
}

export default ImageCard;
