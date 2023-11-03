import React from "react";
import { Layout } from "../../components/Layout";
import { Navigation } from "../../components/Navigation";
import { FeedsCards } from "../../components/FeedsCards";
import { AddFeed } from "../../components/AddFeed";

export const FeedsPage = () => {
  return (
    <>
      <Navigation />
      <Layout>
        <AddFeed />
        <FeedsCards />
      </Layout>
    </>
  );
};
