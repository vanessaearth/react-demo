/* eslint-disable no-fallthrough */
import { data } from '../../components/TodoList/data'

export function TodoReducer(state = data, action) {
  switch (action.type) {
    case 'add': return [
      ...state, {
        id: Date.now(),
        title: action.title,
        done: false
      }]

    case 'done': state.forEach(item => {
      if (item.id === action.id) {
        item.done = action.done
      }
    })
      return [...state]
    case 'edit': state.forEach(item => {
      if (item.id === action.id) {
        item.title = action.title
      }
    })
      return [...state]
    case 'remove':
      state = state.filter(item => item.id !== action.id)
      return state
    case 'remove_done':
      state = state.filter(item => !item.done)
      return state
    default:  return state
  }
}