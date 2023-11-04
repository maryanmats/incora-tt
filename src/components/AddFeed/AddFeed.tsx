import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { methods } from "../../api/api";
import { Feed } from "../../types/Feed";

interface Props {
  addFeed: (newFeed: Feed) => void;
  maxId: number;
}

export const AddFeed: React.FC<Props> = ({ addFeed, maxId }) => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleBody = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBody(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const newFeed = {
      id: maxId,
      title,
      body,
      userId: 3,
    };

    methods
      .post("/posts", newFeed)
      .then((result) => {
        addFeed(result);
        setOpen(false);
        setTitle("");
        setBody("");
      })
      .catch((error) => {
        console.error("Error creating a new feed:", error);
      });
  };

  return (
    <>
      <Button
        sx={{ fontWeight: 600 }}
        variant="contained"
        size="large"
        onClick={handleClickOpen}
      >
        Add Feed
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle color="primary">Add New Feed</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Title"
              type="text"
              value={title}
              onChange={handleTitle}
              fullWidth
              variant="outlined"
              required
            />
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Body"
              type="text"
              value={body}
              onChange={handleBody}
              fullWidth
              variant="outlined"
              multiline
              required
            />
          </DialogContent>
          <DialogActions>
            <Button variant="text" onClick={handleClose}>
              Cancel
            </Button>
            <Button variant="contained" type="submit">
              Create
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
