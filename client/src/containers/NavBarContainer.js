import { connect } from "react-redux";
import NavBar from "../components/NavBar";
import logoutUser from "../actions/logoutUser.js";

const mapStateToProps = state => {
    let username = (state.userData) ? state.userData.username : "";
    return {
        username: username
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => {
            dispatch(logoutUser());
        }
    };
};

const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar);

export default NavBarContainer;


