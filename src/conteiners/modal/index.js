import { connect } from 'react-redux'

import {openModal} from "../../store/openModal/actions";
import {createUser} from "../../sagas/modal/action";
import MyModal from "../../components/modal";

const mapStateToProps = state => ({
  isOpen: state.btnOpenModal.isOpen,
});

const mapDispatchToProps = {
  openModal,
  createUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(MyModal)
