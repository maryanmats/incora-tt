import { Container } from "@mui/material";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <Container
      maxWidth="md"
      sx={{
        marginBlock: "30px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {children}
    </Container>
  );
};
