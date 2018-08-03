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

//Itunes API Links
var itunesUrl = "https://itunes.apple.com/search?term=";
var albumUrl = "https://itunes.apple.com/lookup?id=";

function _search(name) {
    if (Math.random() < 0.25) {
        return Promise.reject('Something went wrong. Please try your search again');
    }
    let artist = name;
    let searchTerm = artist.split(' ').join('+');
    return fetch(`${itunesUrl}${searchTerm}`).then(function (response){
        return response.json();
    })
    .then(function (json){
        for (var i = 0; i < json.results.length; i++) {
          if (json.results[i].artistName === artist) {
            let artistId = json.results[i].artistId
            return fetch(`${albumUrl}${artistId}&entity=album`).then(function(res) {
                if (!res.ok) {
                    return Promise.reject(res.statusText);
                }
                return res.json()
            })
            .then(
                function(data) {
                    data.results.map(music => music)
                    return data.results
                }
            )
          }
          else {
              continue
          }
          // return
        }
    })
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

