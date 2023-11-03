import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { FeedCard } from "../FeedCard";
import { setFeeds } from "../../redux/slice/feedCreateSlice";

export const FeedsCard = () => {
  const data = useSelector((state: RootState) => state.posts.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((result) => dispatch(setFeeds(result)))
      .catch((error) => {
        console.error("Помилка отримання даних:", error);
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
