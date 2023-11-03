import React from "react";
import { CommentsCards } from "../../components/CommentsCards";
import { Navigation } from "../../components/Navigation";
import { Layout } from "../../components/Layout";

export const CommentsPage = () => {
  return (
    <>
      <Navigation />
      <Layout>
        <CommentsCards />
      </Layout>
    </>
  );
};
