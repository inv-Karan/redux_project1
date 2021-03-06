
export const ACTION1 = 'ACTION1';
export const ACTION2 = 'ACTION2';
export const ACTION3 = 'ACTION3';
export const ACTION4 = 'ACTION4';

export const action1 = (filteredMovie) => dispatch => {
    dispatch({
    type: ACTION1,
    payload: filteredMovie
    });
};

export const action2 = (years) => dispatch => {
    dispatch({
    type: ACTION2,
    payload: years
    });
};

export const action3 = (id) => dispatch => {
    dispatch({
    type: ACTION3,
    payload: id
    });
};

export const actionReset = (id) => dispatch => {
    dispatch({
    type: ACTION4
    });
};