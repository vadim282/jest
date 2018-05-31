export const getUsers = () => (
	{
		type: 'GET_USERS',
	}
);

export const setUsers = (value) => (
  {
    type: 'SET_USERS',
    payload: value,
  }
);

export const setUser = users => (
  {
    type: 'SET_USER',
    payload: { users },
  }
);
