import React from "react";
import { IconButton } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { Feed } from "../../types/Feed";
import { Link } from "react-router-dom";
import { methods } from "../../api/api";

interface Props {
  feed: Feed;
  handleDelete: (id: number) => void;
}

export const FeedCard: React.FC<Props> = ({ feed, handleDelete }) => {
  return (
    <Card sx={{ minWidth: "100%", margin: 1 }}>
      <CardContent>
        <Typography variant="h5" sx={{ mb: 1.5 }} color="text.primary">
          {feed.title}
        </Typography>
        <Typography color="text.secondary">{feed.body}</Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Link to={`/feeds/${feed.id}`}>
          <Button size="small">Read More</Button>
        </Link>
        <IconButton size="small">
          <DeleteIcon onClick={() => handleDelete(feed.id)} />
        </IconButton>
      </CardActions>
    </Card>
  );
};
