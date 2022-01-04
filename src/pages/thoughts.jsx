import React, { useState } from "react";

import Thought from "../components/thought";
import AddThought from "../components/addThought";

import { useSelector } from "react-redux";
import Button from "@mui/material/Button";

const ThoughtsPage = () => {
  const thoughts = useSelector((state) => state.thoughtsReducer);
  const [writingThought, setWritingThought] = useState(false);

  return (
    <div className="p-3">
      <div className="flex items-center justify-between">
        <span className="text-xl my-2 font-bold">Thoughts</span>
        <Button onClick={() => setWritingThought(true)} color="inherit">
          + Add thought
        </Button>
      </div>
      <div className="text-xs font-light">
        Add any thought that crosses your mind. Thoughts are powerful when
        written down. Wishing your thoughts to be peacefull.
      </div>

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
