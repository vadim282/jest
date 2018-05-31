export const getInfoAboutUser = id => ({
  type: 'GET_ABOUT_USER',
  payload: id,
});

export const setAboutUserId = user => ({
  type: 'SET_ABOUT_USER',
  payload: user,
});

export const editUser = user => ({
  type: 'EDIT_USER',
  payload: user,
});

export const handleEditUser = user => ({
  type: 'HANDLE_EDIT',
  payload: user,
});


export const handleDeleteUser = id => ({
  type: 'HANDLE_DELETE',
  payload: id,
});

export const deleteUserById = id => ({
  type: 'DELETE_USER_BY_ID',
  payload: id,
});


