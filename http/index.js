const axios = require('axios');
const querystring = require('querystring');

const get = ({ baseUrl, url, headers, params }) => new Promise((resolve, reject) => {
  const config = {
    method: 'GET',
    baseURL: baseUrl,
    url,
    headers,
    params
  };
  axios.request(config)
    .then(response => resolve(response.data))
    .catch(error => reject({ status: error.response.status, message: error.response.data.description }));
});

const post = ({ baseUrl, url, auth, headers, data }) => new Promise((resolve, reject) => {
  const config = {
    method: 'POST',
    baseURL: baseUrl,
    url,
    auth,
    headers: { ...headers, 'Content-Type': 'application/x-www-form-urlencoded' },
    data: querystring.stringify(data)
  };
  axios.request(config)
    .then(response => resolve(response.data))
    .catch(error => reject({ status: error.response.status, message: error.response.data }));
});

module.exports = {
  get,
  post
}
