const login = (state, { user, token }) => {
  state.user = {
    id: user.id,
    username: user.username,
  };
  state.acessToken = token;
}

const logout = state => {
  state.user = null;
  state.acessToken = null;
}

const setUser = (state, user) => {
  state.user = {
    id: user.id,
    username: user.username
  };
}

const refreshToken = (state, token) => {
  state.acessToken = token;
}

export default {
  login,
  logout,
  setUser,
  refreshToken
}
