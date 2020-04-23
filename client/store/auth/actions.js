import axios from 'axios'
const login = ({ commit }, { username, password }) => {
  return axios.post('api/login', {
    username,
    password
  })
  .then(({data}) => {
    const { user, token } = data;
    commit('login', { user, token });
  });
}
const logout = ({commit}) => {
  return commit('logout');
}
const register = (_, { username, email, password }) => {
  return axios.post('api/register', {
    username,
    email,
    password
  });
}
const refresh = ({commit}, token) => {
  return commit('refreshToken', token);
}
export default {
  login,
  logout,
  register,
  refresh
}
