import React from "react";
import { Layout } from "../../components/Layout";
import { Navigation } from "../../components/Navigation";
import { FeedsCards } from "../../components/FeedsCards";

export const FeedsPage = () => {
  return (
    <>
      <Navigation />
      <Layout>
        <FeedsCards />
      </Layout>
    </>
  );
};
