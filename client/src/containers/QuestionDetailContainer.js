import { connect } from "react-redux";
import QuestionDetail from "../components/QuestionDetail";
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

const QuestionDetailContainer = connect(mapStateToProps, mapDispatchToProps)(QuestionDetail);

export default QuestionDetailContainer;