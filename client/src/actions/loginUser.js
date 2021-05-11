import { LOGIN_USER } from "../constants/constants.js";

const loginUser = user => {
    return {
        type: LOGIN_USER,
        username: user
    };
};

export default loginUser;