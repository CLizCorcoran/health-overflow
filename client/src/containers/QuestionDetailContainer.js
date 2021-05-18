import { connect } from "react-redux";
import QuestionDetail from "../components/QuestionDetail";


const mapStateToProps = state => {
    return {
        user: state.userData
    };
};

const QuestionDetailContainer = connect(mapStateToProps, null)(QuestionDetail);

export default QuestionDetailContainer;