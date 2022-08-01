function user(user = {
  loading: true,
  data: []
}, action) {
  switch (action.type) {
    case 'user_loading':
      return {
        loading: true,
      }
    case 'user_loadover':
      return {
        loading: false,
        data: action.data
      }
    default: return ''
  }

}

export default user;