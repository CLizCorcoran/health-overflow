import { LOGIN_USER } from "../constants/constants.js";

const loginUser = (user, token) => {
    return {
        type: LOGIN_USER,
        user: {
            username: user,
            token: token
        }
     };
};

export default loginUser;