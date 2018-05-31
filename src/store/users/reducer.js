const INIT = {
	items: [],
  pending: false,
};

const setUserHandler = (state, { users }) => {
  const updatedUsers = [...state.items].concat(users);
  return { ...state, items: updatedUsers };
};

export default (state = INIT, action) => {
	const {type, payload} = action;

	switch (type) {
		case 'GET_USERS':
			return {
        ...state, pending:true
      };

    case 'SET_USERS':
			return {
        ...state, items:payload, pending: false
      };

    case 'SET_USER':
      return setUserHandler(state, payload);

		default:
			return state;
	}
}
