import { LOGIN_USER, LOGOUT_USER } from "../constants/constants.js";

const userData = (state = null, action) => {
    switch(action.type) {
        case LOGIN_USER:
            return {username: action.user.username, token: action.user.token};
         case LOGOUT_USER:
            return null;
        default:
            return state;
    }
};

export default userData;