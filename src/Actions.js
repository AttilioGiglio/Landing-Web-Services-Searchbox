import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from './Constants.js';

export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
});
// SetSearchField is the action, that is going to take text, the user input, and return an object.

export const requestRobots = () => (dispatch) => {
    dispatch({ type: REQUEST_ROBOTS_PENDING })
    fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(data => ({ type: REQUEST_ROBOTS_SUCCESS, payload: data })).catch(error => dispatch({type: REQUEST_ROBOTS_FAILED, payload:error}))
};

// export const setSearchField = (text) => ({
//     type: CHANGE_SEARCH_FIELD,
//     payload: text
// });

// export const setSearchField = (text) => ({
//     type: CHANGE_SEARCH_FIELD,
//     payload: text
// });

