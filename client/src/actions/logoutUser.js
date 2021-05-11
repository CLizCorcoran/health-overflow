import { LOGOUT_USER } from "../constants/constants.js";

const logoutUser = () => {
    return {
        type: LOGOUT_USER
    };
};

export default logoutUser;