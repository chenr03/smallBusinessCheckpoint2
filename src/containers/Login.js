import Login from '../components/Login'
import {connect} from "react-redux";
import {login} from '../redux/actions'


const mapDispatchToProps = (dispatch) => {
    return {
        login: () => dispatch(login())
    }
}

export default connect(null, mapDispatchToProps)(Login)

