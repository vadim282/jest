import { connect } from 'react-redux'

import { openModal } from '../../store/openModal/actions'
import AddBtn from "../../components/AddBtn";

const mapDispatchToProps = ({
  openModal,
});

export default connect(null, mapDispatchToProps)(AddBtn)
