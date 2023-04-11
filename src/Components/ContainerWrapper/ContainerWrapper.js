import { Stack } from "@mui/material";

export default function ContainerWrapper(props) {
  return (
    <Stack
      sx={{
        borderRadius: props.borderRadius,
        border: props.border,
        padding: props.padding,
        width: props.width,
        height: props.height,
      }}
    >
      {props.children}
    </Stack>
  );
}
