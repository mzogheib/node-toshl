const oauth = require('./api/oauth');
const entries = require('./api/entries');
const tags = require('./api/tags');

module.exports = class NodeToshl {
  constructor({ client_id, client_secret, redirect_uri }) {
    this.oauth = {
      url: () => oauth.url({ client_id, redirect_uri }),
      token: ({ code }) => oauth.token({ code, client_id, client_secret, redirect_uri }),
      deauthorize: ({ refresh_token, access_token }) => oauth.deauthorize({ refresh_token, access_token }),
      refresh: ({ refresh_token }) => oauth.refresh({ refresh_token, client_id, client_secret })
    }
    this.entries = entries;
    this.tags = tags;
  }
}
