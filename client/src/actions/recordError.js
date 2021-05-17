import { RECORD_ERROR } from "../constants/constants.js";

const recordError = (title, description) => {
    return {
        type: RECORD_ERROR,
        error: {
            title: title,
            description: description
        }
    };
};

export default recordError;