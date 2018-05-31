import {connect} from 'react-redux'

import AboutUser from "../../components/about-user";
import { getInfoAboutUser, editUser, handleEditUser, handleDeleteUser } from '../../store/about-user/actions';

const mapStateToProps = (state, ownProps) => ({
  ownProps,
  activeUser: state.aboutUser.activeUser,
});
const mapDispatchStateToProps = {
  getInfoAboutUser,
  handleEditUser,
  editUser,
  handleDeleteUser,
};

export default connect(mapStateToProps, mapDispatchStateToProps)(AboutUser)
