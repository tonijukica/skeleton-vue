import axios from 'axios'
const login = ({ commit }, { username, password }) => {
  axios.post('api/login', {
    username,
    password
  })
  .then((res) => {
    commit('login', { user, token });
  })
  .catch(err => {
    commit('setError', {
      msg: err.response.data
    })
  });
}
const logout = ({commit}) => {
  commit('logout');
}

export default {
  login,
  logout
}
