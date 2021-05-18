import { connect } from "react-redux";
import Questions from "../components/Questions";

const mapStateToProps = state => {
    return {
        filter: state.filterValue,
        user: state.userData
    };
};


const QuestionsContainer = connect( mapStateToProps, null)(Questions);

export default QuestionsContainer;