const dummyAction = () => (dispatch, getState) => {
  const state = getState();
  console.log('use state as you want', state);
  dispatch({ type: 'ACTION_TYPE', payload: 'data' });
  // If you want to call .then() on action call then return data
  return 'data';
};

export default dummyAction;
