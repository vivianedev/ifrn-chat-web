import React from "react";
import Button from "@mui/material/Button";

export const AppButton = (props) => {
  let color_button = props.color ?? "primary";
  let handle_click = props.onClick ?? (() => null);
  let title_button = props.title ?? "unamed";

  return (
    <Button
      color={color_button}
      onClick={handle_click}
      title={title_button}
      {...props}
    >
      {props.label}
    </Button>
  );
};