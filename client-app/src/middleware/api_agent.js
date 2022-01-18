import _superagent from 'superagent';
import superagentPromise from 'superagent-promise';

const superagent = superagentPromise(_superagent, global.Promise);

const API_ROOT = 'http://localhost:8080/api';

const responseBody = res => res.body;

const requests = {
  get: url =>
    superagent.get(`${API_ROOT}${url}`).then(responseBody),
};

// get all accounts from  server
const Accounts = {
  getAllAccounts: page =>
    requests.get(`/accounts`)
};

export default {
    Accounts,
};