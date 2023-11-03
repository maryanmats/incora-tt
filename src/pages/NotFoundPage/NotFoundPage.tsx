import React, { useEffect } from "react";
import { Layout } from "../../components/Layout";
import { Navigation } from "../../components/Navigation";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/feeds");
    }, 3000);
  }, []);

  return (
    <>
      <Navigation />
      <Layout>
        <Typography variant="h5">
          This page was not found. You will be redirected to the main page in 3
          seconds
        </Typography>
      </Layout>
    </>
  );
};
