import request from './request';

const profile = (token) => {
  return request.get('api/profile', token)
  .then((res) => res.data)
}

export default {
  profile
}
