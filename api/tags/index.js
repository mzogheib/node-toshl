const http = require('../../http');
const { baseApiUrl } = require('../config');

module.exports = {
  list: ({ access_token }) => http.get({ baseUrl: baseApiUrl, url: '/tags', headers: { Authorization: `Bearer ${access_token}` }})
}
