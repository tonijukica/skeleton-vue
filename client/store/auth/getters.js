const getUser = (state) => {
  return {
    user: state.user,
    acessToken: state.acessToken
  }
}

export default {
  getUser
}
