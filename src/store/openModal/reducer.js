const INIT = {
  items: [],
  isOpen: false,
};

export default (state = INIT, action) => {
  const {type} = action;

  switch (type) {
    case 'OPEN_MODAL':
      return {
        ...state, isOpen: !state.isOpen,
      };

    default:
      return state;
  }
}
