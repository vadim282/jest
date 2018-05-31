const INIT = {
  users: [],
  activeUser: {},
};

const updateUserInfoHandler = (state, payload) => {
  const updatedUsers = [...state.users].map(user => user.id === payload.id ? payload : user);
  return { ...state, users: updatedUsers};
};

export function aboutUser(state = INIT, action) {
  const { type, payload } = action;

  switch (type) {
    case 'SET_ABOUT_USER':
      return { ...state, activeUser: payload };

    case 'EDIT_USER':
      return updateUserInfoHandler(state, payload);

    case 'DELETE_USER_BY_ID':
      return { ...state, users: [...state.users].filter(user => user.id !== payload.id)};

    default:
      return state;
  }
}
