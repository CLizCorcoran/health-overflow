import { connect } from "react-redux";
import AskQuestion from "../components/AskQuestion";
import recordError from "../actions/recordError.js";


const mapStateToProps = state => {
    return {
        user: state.userData
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onError: (title, description) => {
            dispatch(recordError(title, description));
        }

    };
};


const AskQuestionContainer = connect(mapStateToProps, mapDispatchToProps)(AskQuestion);

export default AskQuestionContainer;