import { FILTER_EVENT_ITEMS } from "../constants/constants.js";

const filterValue = (state = "general", action) => {
    switch (action.type) {
        case FILTER_EVENT_ITEMS:
            return action.filter;
        default:
            return state;
    }
};

export default filterValue;