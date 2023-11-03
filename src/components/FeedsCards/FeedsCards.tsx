import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { setFeeds } from "../../redux/slice/feedCreateSlice";
import { FeedCard } from "../FeedCard";

export const FeedsCards = () => {
  const data = useSelector((state: RootState) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((result) => dispatch(setFeeds(result.slice(0, 10))))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  console.log(data);

  return (
    <>
      {data.length > 0 &&
        data.map((feed) => (
          <React.Fragment key={feed.title}>
            <FeedCard feed={feed} />
          </React.Fragment>
        ))}
    </>
  );
};
