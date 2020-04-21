const login = (state, { user, token }) => {
  state.user = user;
  state.acessToken = token;
}

const logout = state => {
  state.user = null;
  state.acessToken = null;
}

const setUser = (state, user) => {
  state.user = user;
}
const setError = (state, error) => {
  state.error = error;
}
const clearError = (state) => {
  state.error = null;
}
export default {
  login,
  logout,
  setUser,
  setError,
  clearError
}
