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

  const [thought, setThought] = React.useState("");
  const [detail, setDetail] = React.useState("");

  const clear = () => {
    setThought("");
    setDetail("");
  };

  const submit = () => {
    dispatch(
      addThought({
        id: Date.now(),
        thought,
        detail,
      })
    );
    clear();
    onClose();
  };

  return (
    <Dialog fullWidth onClose={handleClose} open={open}>
      <DialogTitle sx={{ pb: 1 }}>What are you thinking ?</DialogTitle>
      <DialogContent sx={{ pb: 1 }}>
        <TextField
          autoFocus
          fullWidth
          size="small"
          id="outlined-basic"
          label="Thought"
          value={thought}
          onChange={(e) => setThought(e.target.value)}
          variant="outlined"
          sx={{ my: 1 }}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Detail"
          multiline
          fullWidth
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          sx={{ my: 1 }}
          minRows={5}
          maxRows={6}
          onKeyDown={(e) =>
            e.key === "Enter"
              ? document.getElementById("submit").click()
              : () => {}
          }
        />
        <Button
          id="submit"
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
