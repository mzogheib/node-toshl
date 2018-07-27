const http = require('../../http');
const { baseApiUrl } = require('../config');

module.exports = {
  list: ({ from, to, access_token }) => http.get({ baseUrl: baseApiUrl, url: '/entries', headers: { Authorization: `Bearer ${access_token}` }, params: { from, to } })
}
