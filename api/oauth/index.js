const querystring = require('querystring');
const http = require('../../http');
const { baseOauthUrl } = require('../config');

const url = ({ client_id, redirect_uri }) => {
  const params = { client_id, response_type: 'code', redirect_uri };
  return `${baseOauthUrl}/authorize?${querystring.stringify(params)}`;
}

const token = ({ code, client_id, client_secret, redirect_uri }) => {
  const data = { code, grant_type: 'authorization_code', redirect_uri };
  return http.post({ baseUrl: baseOauthUrl, url: '/token', auth: { username: client_id, password: client_secret }, data });
}

const deauthorize = ({ refresh_token, access_token }) => {
  const data = { refresh_token };
  return http.post({ baseUrl: baseOauthUrl, url: '/revoke', headers: { Authorization: `Bearer ${access_token}` }, data });
}

const refresh = ({ refresh_token, client_id, client_secret }) => {
  const data = { grant_type: 'refresh_token', refresh_token };
  return http.post({ baseUrl: baseOauthUrl, url: '/token', auth: { username: client_id, password: client_secret }, data });
}

module.exports = {
  url,
  token,
  deauthorize,
  refresh
};
