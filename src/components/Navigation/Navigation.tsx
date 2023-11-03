import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";

export const Navigation = () => {
  const navigate = useNavigate();
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link to="/feeds">INCORA</Link>
        </Typography>
        <Button color="inherit" startIcon={<PersonIcon />}>
          {username?.toUpperCase()}
        </Button>
        <IconButton onClick={handleLogout} sx={{ marginLeft: "16px" }}>
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
