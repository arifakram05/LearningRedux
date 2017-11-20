// state is not application state, but the piece of state this reducer is responsible for.
export default function(state = null, action) {
  // Redux doesn't allow undefined to be returned from a Reducer.
  // Hence, state = null (ES6) ensures that if state is undefined it is assinged null value
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload; // Do not mutate the object being returned
  }
  return state;
}
