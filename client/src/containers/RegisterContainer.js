import { connect } from "react-redux";
import Register from "../components/Register.jsx";
import loginUser from "../actions/loginUser.js";
import recordError from "../actions/recordError.js";
import clearError from "../actions/clearError.js";

const mapStateToProps = state => {
    return {
        username: state.userData,
        error: state.errorData
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onLogin: (username) => {
            dispatch(loginUser(username));
        },

        onError: (title, description) => {
            dispatch(recordError(title, description));
        },

        onClearError: () => {
            dispatch(clearError());
        }
    };
};

const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(Register);

export default RegisterContainer;