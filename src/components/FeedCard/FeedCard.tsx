import React from "react";
import { IconButton } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { Feed } from "../../types/Feed";
import { useDispatch } from "react-redux";
import { deleteFeed } from "../../redux/slice/feedCreateSlice";
import { Link } from "react-router-dom";

interface Props {
  feed: Feed;
}

export const FeedCard: React.FC<Props> = ({ feed }) => {
  const dispatch = useDispatch();

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
        <IconButton onClick={() => dispatch(deleteFeed(feed.id))} size="small">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
