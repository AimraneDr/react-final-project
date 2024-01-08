
export const addBranch = (branch) => ({
    type: 'ADD_BRANCH',
    payload: branch,
});

export const updateBranch = (branch) => ({
    type: 'UPDATE_BRANCH',
    payload: branch,
});

export const deleteBranch = (branch) => ({
    type: 'DELETE_BRANCH',
    payload: branch,
});
  