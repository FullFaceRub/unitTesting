const axios = require('axios');

// Purpose - a function that will return all users
// EDGE CASES:
// - no users
// - server error
// - network error
// - check for duplicates

module.exports = {
    getUsers: (url) => {
        return axios.get(url).then(resp => {
            return resp.data;
        })
    }
}