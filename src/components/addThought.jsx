import * as React from "react";

import { useDispatch } from "react-redux";

import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Dialog from "@mui/material/Dialog";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { addThought } from "../store/actions";

const AddThought = (props) => {
  const dispatch = useDispatch();
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

  const clear = () => {
    setTitle("");
    setDescription("");
  };

  const submit = () => {
    dispatch(
      addThought({
        id: Date.now(),
        title,
        description,
      })
    );
    clear();
    onClose();
  };

  return (
    <Dialog fullWidth onClose={handleClose} open={open}>
      <DialogTitle sx={{ pb: 1 }}>Write a thought</DialogTitle>
      <DialogContent sx={{ pb: 1 }}>
        <TextField
          fullWidth
          size="small"
          id="outlined-basic"
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          variant="outlined"
          sx={{ my: 1 }}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Description"
          multiline
          fullWidth
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ my: 1 }}
          minRows={5}
          maxRows={6}
          onKeyDown={(e) => (e.key === "Enter" ? submit() : () => {})}
        />
        <Button
          onClick={() => {
            submit();
          }}
          className="float-right"
          color="success"
        >
          Add
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default AddThought;
