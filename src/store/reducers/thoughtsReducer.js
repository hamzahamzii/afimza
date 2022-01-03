const thoughtsReducer = (state = [], action) => {
  switch (action.type) {
    case "addThought":
      return [...state, action.payload];
    case "removeThought":
      return [...state.filter((thought) => thought.id !== action.id)];
    default:
      return state;
  }
};

export default thoughtsReducer;
