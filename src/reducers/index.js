import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';// one of the reducers - contains a piece of application state
import ActiveBook from './reducer_active_book';

// this function adds keys to application state
// Reducers form the application state. All Reducers are mentioned at this place.
const rootReducer = combineReducers({
  books: BooksReducer, //a piece of application state can be retrieved using the key 'books'
  // key is books and value is obtained from BooksReducer
  activeBook: ActiveBook
});

export default rootReducer;
