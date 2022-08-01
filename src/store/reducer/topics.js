function topics(topics = {
  loading: true,
  data: []
}, action) {
  switch (action.type) {
    case 'topics_loading':
      return {
        loading: true,
      }
    case 'topics_loadover':
      return {
        loading: false,
        data: action.data
      }
    default: return ''
  }

}

export default topics;