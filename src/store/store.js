import {combineReducers, createStore} from 'redux'
import {TodoReducer} from './TodoReducer'
import {countReducer} from './reducer/countReducer'
// function reducer(state={},action){
//   return {
//     countReducer:countReducer(state.count,action),
//     TodoReducer:TodoReducer(state.todo,action),
//   }
// }
// let store =createStore(countFn)
// let store =createStore(TodoReducer)
let store =createStore(combineReducers({countReducer,TodoReducer}))
export default store
