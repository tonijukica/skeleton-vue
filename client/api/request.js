import axios from 'axios';
import store from '../store';

const config = {
  baseURL: 'http://localhost:4000',
  withCredentials: true,
  headers: { 'Content-type': 'application/json' }
}

const client = axios.create(config);

client.interceptors.request.use(config => {
  const { acessToken } = store.getters.getUser;
  if(acessToken)
    config.headers['Authorization'] = 'Bearer ' + acessToken;
  return config
});

client.interceptors.response.use(res => res, err => {
  const orgReq = err.config;
  if(err) {
    if(err.response.status  === 401 && !orgReq._retry){
      orgReq._retry = true;
      return axios.get('api/refresh')
        .then((res) => {
          if(res.status === 200){
            const { token } = res.data;
            store.dispatch('refresh', token);
            client.defaults.headers.common['Authorization'] = 'Bearer ' + token;
            return client(orgReq);
          }
        })
    }
    return Promise.reject(err);
  }
})
export default client;
