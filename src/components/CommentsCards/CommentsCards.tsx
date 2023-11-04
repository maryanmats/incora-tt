import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { CommentCard } from "../CommentCard";
import { Link, useParams } from "react-router-dom";
import { Comment } from "../../types/Comment";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { methods } from "../../api/api";
import { Feed } from "../../types/Feed";
import { Typography } from "@mui/material";

export const CommentsCards = () => {
  const [singleFeed, setSingleFeed] = useState<Feed | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const { id } = useParams();

  useEffect(() => {
    methods
      .get(`comments?postId=${id}`)
      .then((result) => setComments(result))
      .catch((error) => console.log("Error", error));

    methods
      .get(`posts/${id}`)
      .then((result) => setSingleFeed(result))
      .catch((error) => console.log("Error", error));
  }, []);

  return (
    <Box display="flex" flexDirection="column">
      <Button
        sx={{ alignSelf: "start" }}
        variant="text"
        startIcon={<ArrowBackIosIcon />}
      >
        <Link
          to="/feeds"
          style={{
            textDecoration: "none",
            fontWeight: "600",
          }}
        >
          Go back
        </Link>
      </Button>
      <Typography variant="h4">{singleFeed?.title}</Typography>
      <Typography>{singleFeed?.body}</Typography>
      {comments.length > 0 &&
        comments.map((comment) => (
          <React.Fragment key={comment.email}>
            <CommentCard comment={comment} />
          </React.Fragment>
        ))}
    </Box>
  );
};
