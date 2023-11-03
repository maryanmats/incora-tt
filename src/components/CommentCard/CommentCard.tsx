import React from "react";
import CardContent from "@mui/material/CardContent";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Comment } from "../../types/Comment";
import PersonIcon from "@mui/icons-material/Person";

interface Props {
  comment: Comment;
}

export const CommentCard: React.FC<Props> = ({ comment }) => {
  return (
    <Card sx={{ minWidth: "100%", margin: 1 }}>
      <CardContent>
        <Typography
          variant="h5"
          sx={{
            mb: 1.5,
            display: "flex",
            alignItems: "center",
          }}
          color="text.primary"
        >
          {<PersonIcon />} {comment.email}
        </Typography>
        <Typography sx={{ fontWeight: 600 }} color="text.secondary">
          {comment.name}
        </Typography>
        <Typography color="text.secondary">{comment.body}</Typography>
      </CardContent>
    </Card>
  );
};
