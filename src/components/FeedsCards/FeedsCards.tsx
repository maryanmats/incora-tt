import React, { useEffect, useState } from "react";
import { FeedCard } from "../FeedCard";
import { Feed } from "../../types/Feed";
import { methods } from "../../api/api";
import { AddFeed } from "../AddFeed";
import { Button } from "@mui/material";

export const FeedsCards = () => {
  const [feeds, setFeeds] = useState<Feed[]>([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    methods
      .get("posts")
      .then((result) => setFeeds(result))
      .catch((error) => console.log("Error", error));
  }, []);

  const addFeed = (newFeed: Feed) => {
    setFeeds((prevFeeds) => [...prevFeeds, newFeed]);
  };

  const handleDelete = (id: number) => {
    methods
      .delete(`posts/${id}`)
      .then(() => setFeeds((prev) => prev.filter((feed) => feed.id !== id)));
  };

  const filteredFeeds = showAll ? feeds : feeds.slice(0, 3);

  return (
    <>
      <AddFeed addFeed={addFeed} maxId={feeds.length + 1} />
      {feeds.length > 0 &&
        filteredFeeds.map((feed) => (
          <React.Fragment key={feed.title}>
            <FeedCard feed={feed} handleDelete={handleDelete} />
          </React.Fragment>
        ))}
      {!showAll && (
        <Button
          sx={{ fontWeight: 600 }}
          variant="contained"
          size="large"
          onClick={() => setShowAll(true)}
        >
          Show All
        </Button>
      )}
    </>
  );
};
