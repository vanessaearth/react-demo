import { createStore,combineReducers } from "redux";
import {TodoReducer} from './reducer/TodoReducer'
import topics from './reducer/topics'
import topicDetail from './reducer/topicDetail'
import user from './reducer/user'
export default createStore(combineReducers({
  TodoReducer,
  topics,
  topicDetail,
  user
}))