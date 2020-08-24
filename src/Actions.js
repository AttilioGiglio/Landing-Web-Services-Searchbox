import {CHANGE_SEARCH_FIELD} from './Constants.js';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});


// SetSearchField is the action, that is going to take text, the user input, and return an object.