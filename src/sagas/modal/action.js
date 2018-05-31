export const createUser = (user) => (
  {
    type: 'CREATE_NEW_USER',
    payload: user,
  }
);
