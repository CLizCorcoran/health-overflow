import { LOGIN_USER, LOGOUT_USER } from "../constants/constants.js";

const userData = (state = "", action) => {
    switch(action.type) {
        case LOGIN_USER:
            return action.username;
        case LOGOUT_USER:
            return "";
        default:
            return state;
    }
};

export default userData;