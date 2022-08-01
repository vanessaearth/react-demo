function topicDetail(topic = {
  loading: true,
  data: [],
  isError:false,
  errorMsg:''
}, action) {
  switch (action.type) {
    case 'topic_detail_loading':
      return {
        data:[],
        loading: true,
        isError:false,
        errorMsg:'',
      }
    case 'topic_detail_loadover':
      return {
        loading: false,
        data: action.data,
        isError:false,
        errorMsg:'',
      }
      case "topic_detail_error": return {
        loading: false,
        data: [],
        isError:true,
        errorMsg:action.errorMsg
      }
    default: return ''
  }

}

export default topicDetail;