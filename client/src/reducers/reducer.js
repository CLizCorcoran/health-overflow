import { combineReducers } from "redux";

import userData from "./userData.js";
import filterValue from "./filterValue.js";
import errorData from "./errorData.js";

const reducer = combineReducers( {
    userData,
    filterValue,
    errorData
});

export default reducer;