const dummyReducer = (store = {}, action) => {
  switch (action.type) {
    case 'Action Type': {
      return 'Payload';
    }
    default: {
      return store;
    }
  }
};

export default dummyReducer;
