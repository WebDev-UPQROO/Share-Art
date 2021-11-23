export const selectComment = (id, state) => {
  return state.comments.find((comment) => comment._id === id);
};
