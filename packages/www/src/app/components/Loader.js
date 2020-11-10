import React from "react";
import loaderStyle from "./Loader.module.css";
import { jsx } from "theme-ui";

export default function Loader({ children }) {
  return (
    <div
      className={loaderStyle.loader__wrapper}
      sx={{ background: "secondary" }}
    >
      <div className={loaderStyle.loader}>{children}</div>
    </div>
  );
}
