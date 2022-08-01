import { createStore,combineReducers } from "redux";
import topics from './reducer/topics'
import topicDetail from './reducer/topicDetail'
import user from './reducer/user'
export default createStore(combineReducers({
  topics,
  topicDetail,
  user
}))