import * as React from "react";

import { useDispatch } from "react-redux";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeThought } from "../store/actions";

const Thought = (props) => {
  const { id, thought, detail } = props.data;
  const dispatch = useDispatch();
  const trimId = (id) => id.toString().slice(-4);
  return (
    <Card className="mx-2" sx={{ maxWidth: 270, minWidth: 200 }}>
      <CardContent>
        <div className="flex items-center justify-between">
          <span className="text-xs">Thought {trimId(id)}</span>
          <Button
            className="p-0"
            onClick={() => dispatch(removeThought(id))}
            color="inherit"
          >
            <DeleteIcon />
          </Button>
        </div>

        <Typography variant="h4" component="div">
          {thought}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {detail}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Thought;
