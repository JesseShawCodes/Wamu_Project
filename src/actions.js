import fetch from 'cross-fetch'
export const RECEIVE_DATA = 'RECEIVE_DATA';
export const SEARCH_DATA = 'SEARCH_DATA';
export const SEARCH_ERROR = 'SEARCH_ERROR';

export const searchDataRequest = () => ({
    type: SEARCH_DATA
});

export const searchDataSuccess = data => ({
    type: RECEIVE_DATA,
    data
});

export const searchDataError = error => ({
    type: SEARCH_ERROR,
    error
});


function _search(name) {
    if (Math.random() < 0.25) {
        return Promise.reject('Something went wrong. Please try your search again');
    }
    return fetch(`http://localhost:8080/project-title/${name}`)
    .then(data => console.log(data))
}

function search(name) {
    return new Promise((resolve, reject) => {
        resolve(_search(name))
    });
}


export const searchDb = name => dispatch => {
    dispatch(searchDataRequest());
    search(name)
        .then(
                function(data) {
                    dispatch(searchDataSuccess(data))
                }
        )
        .catch(error => dispatch(searchDataError(error)));
};

