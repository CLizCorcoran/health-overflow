import { CLEAR_ERROR } from "../constants/constants.js";

const clearError = () => {
    return {
        type: CLEAR_ERROR 
    };
};

export default clearError;