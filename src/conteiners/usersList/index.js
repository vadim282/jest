import { connect } from 'react-redux'


import UsersList from '../../components/usersList'
import { getUsers } from '../../store/users/actions'

const mapStateToProps = state => ({
  users: state.userInfo.items,
  pending: state.userInfo.pending,
});

const mapDispatchToProps = {
  getUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList)


