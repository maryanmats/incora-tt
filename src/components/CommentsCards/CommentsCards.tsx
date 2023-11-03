import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { CommentCard } from "../CommentCard";
import { Link, useParams } from "react-router-dom";
import { Comment } from "../../types/Comment";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export const CommentsCards = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
      .then((response) => response.json())
      .then((result) => setComments(result))
      .catch((error) => {
        console.error("Error:", error);
      });
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
      {comments.length > 0 &&
        comments.map((comment) => (
          <React.Fragment key={comment.email}>
            <CommentCard comment={comment} />
          </React.Fragment>
        ))}
    </Box>
  );
};
