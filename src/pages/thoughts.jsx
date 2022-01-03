import React from "react";

import Thought from "../components/thought";

import { useSelector, useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import { addThought } from "../store/actions";

const ThoughtsPage = () => {
  const thoughts = useSelector((state) => state.thoughtsReducer);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Thoughts</h2>
      <Button
        onClick={() =>
          dispatch(
            addThought({
              id: Date.now(),
              title: "kuch nahi",
              description: "bas yunhi",
            })
          )
        }
        color="inherit"
      >
        + Add thought
      </Button>
      <div className="d-flex">
        {thoughts.map((thought) => (
          <Thought key={thought.id} data={thought} />
        ))}
      </div>
    </div>
  );
};

export default ThoughtsPage;
