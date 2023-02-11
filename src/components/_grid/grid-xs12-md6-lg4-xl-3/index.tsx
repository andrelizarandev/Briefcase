// Modules
import { ReactNode } from "react";
import { Grid } from "@mui/material";

type Props = {
  children:ReactNode;
}

export default function GridXS12MD6LG4XL3 ({ children }:Props) {
  return (
    <Grid xs={6} sm={4} md={3} lg={2} item>
      {children}
    </Grid>
  )
}