import React, { useEffect, useState } from "react";
import { TextField, Typography, Button, Alert, Snackbar } from "@mui/material";
import { Layout } from "../../components/Layout";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = React.useState(false);
  const navigate = useNavigate();

  const checkUserAndPass = username === "incora" && password === "incora";

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const onHandleUsername = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const onHandlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (checkUserAndPass) {
      setOpen(true);
      localStorage.setItem("username", username);
      setTimeout(() => {
        navigate("/feeds");
      }, 1000);
    } else {
      setOpen(true);
    }
  };

  return (
    <>
      <Layout>
        <Typography variant="h3" color="primary" sx={{ marginBottom: "16px" }}>
          You are welcome
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Username"
            variant="outlined"
            fullWidth
            margin="normal"
            value={username}
            onChange={onHandleUsername}
            required
          />
          <TextField
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            margin="normal"
            value={password}
            onChange={onHandlePassword}
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            onClick={handleClick}
            sx={{ marginTop: "10px" }}
          >
            Login
          </Button>
        </form>
      </Layout>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        {checkUserAndPass ? (
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            You have successfully logged in
          </Alert>
        ) : (
          <Alert
            onClose={handleClose}
            severity="warning"
            sx={{ width: "100%" }}
          >
            Username or password is incorrect!
          </Alert>
        )}
      </Snackbar>
    </>
  );
};
