import { combineReducers } from "redux";

import userData from "./userData.js";
import filterValue from "./filterValue.js";

const reducer = combineReducers( {
    userData,
    filterValue
});

export default reducer;