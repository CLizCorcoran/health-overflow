import { FILTER_EVENT_ITEMS } from "../constants/constants.js";

const filterEventItems = filter => {
    return {
        type: FILTER_EVENT_ITEMS,
        filter: filter
    };
};

export default filterEventItems;