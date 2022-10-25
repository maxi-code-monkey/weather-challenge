import React from "react";
import { ScopedCssBaseline } from "@mui/material";

export const withScopedCss =
  <T extends {}>(Component: React.FC<T>) =>
  (props: T) =>
    (
      <ScopedCssBaseline>
        <Component {...props} />
      </ScopedCssBaseline>
    );
