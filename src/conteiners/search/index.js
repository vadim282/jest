import { connect } from 'react-redux'

import { filterUsers } from '../../sagas/search/action';

import Search from "../../components/search";
import { getUsers } from '../../store/users/actions';

const mapDispatchToProps = ({
  filterUsers,
  getUsers,
});

export default connect(null, mapDispatchToProps)(Search)
