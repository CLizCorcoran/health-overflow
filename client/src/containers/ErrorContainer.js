import { connect } from "react-redux";
import Error from "../components/Error.jsx";
//import recordError from "../actions/recordError.js";
import clearError from "../actions/clearError.js";

const mapStateToProps = state => {
    return {
        error: state.errorData
    };
};


const mapDispatchToProps = dispatch => {
    return {
         onClearError: () => {
            dispatch(clearError());
        }
    };
};

const ErrorContainer = connect(mapStateToProps, mapDispatchToProps)(Error);

export default ErrorContainer;