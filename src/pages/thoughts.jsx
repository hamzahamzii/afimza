import React, { useState } from "react";

import Thought from "../components/thought";
import AddThought from "../components/addThought";

import { useSelector } from "react-redux";
import Button from "@mui/material/Button";

const ThoughtsPage = () => {
  const thoughts = useSelector((state) => state.thoughtsReducer);
  const [writingThought, setWritingThought] = useState(false);

  return (
    <div>
      <h2>Thoughts</h2>
      <Button onClick={() => setWritingThought(true)} color="inherit">
        + Add thought
      </Button>

      <AddThought
        onClose={() => setWritingThought(false)}
        open={writingThought}
      />

      <div className="flex p-3 items-center">
        {thoughts.map((thought) => (
          <Thought key={thought.id} data={thought} />
        ))}
      </div>
    </div>
  );
};

export default ThoughtsPage;
