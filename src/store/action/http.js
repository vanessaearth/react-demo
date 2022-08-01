import axios from 'axios'
import { useDispatch } from 'react-redux'
const http = axios.create({
  baseURL: 'https://cnodejs.org/api/v1'
})
export function useTopicsList() {
  let dispatch = useDispatch()
  return function (tab = 'all', page = 1, pagesize = 20, mdrender = true) {
    dispatch({
      type: 'topics_loading'
    })
    http.get(`./topics?tab=${tab}&page=${page}&pagesize=${pagesize}&mdrender=${mdrender}`)
      .then(res => {
        console.log('api', res.data.data)
        dispatch({
          type: 'topics_loadover',
          data: res.data.data
        })
      })

  }
}
export function useTopicsDetail() {
  let dispatch = useDispatch()
  return function (id) {
    dispatch({
      type: 'topic_detail_loading'
    })
    http.get(`./topic/${id}`)
      .then(res => {
        console.log('api', res)
        dispatch({
          type: 'topic_detail_loadover',
          data: res.data.data
        })
      }).catch(res=>{
        dispatch({
          type:'topic_detail_error',
          errorMsg: res.response.data.error_msg
        })
      })

  }
}
export function useUserDetail() {
  let dispatch = useDispatch()
  return function (loginname) {
    dispatch({
      type: 'user_loading'
    })
    http.get(`./user/${loginname}`)
      .then(res => {
        dispatch({
          type: 'user_loadover',
          data: res.data.data
        })
      })

  }
}