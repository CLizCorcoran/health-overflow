import { connect } from "react-redux";
import Login from "../components/Login.jsx";
import loginUser from "../actions/loginUser.js";

const mapStateToProps = state => {
    return {
        username: state.userData
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onLogin: (username) => {
            dispatch(loginUser(username));
        } 
    };
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;