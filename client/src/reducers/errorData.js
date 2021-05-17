import { RECORD_ERROR, CLEAR_ERROR } from "../constants/constants.js";

const errorData = (state = null, action) => {

    switch (action.type) {
        case RECORD_ERROR:
            return {title: action.error.title, description: action.error.description};

        case CLEAR_ERROR:
            return null;
        
        default:
            return state;
    }
}

export default errorData;

