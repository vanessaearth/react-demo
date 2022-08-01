export function countReducer(state={count:1},action){
  switch(action.type){
    case 'add':return {count:state.count+1}
    case 'reduce':return {count:state.count-1}
  }
  return state
}