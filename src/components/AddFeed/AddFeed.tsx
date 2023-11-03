import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useDispatch } from "react-redux";
import { addFeed } from "../../redux/slice/feedCreateSlice";

export const AddFeed = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const dispatch = useDispatch();

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
    dispatch(addFeed({ title, body }));
    setOpen(false);
    setTitle("");
    setBody("");
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
