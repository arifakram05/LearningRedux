export function selectBook(book) {
  // selectBook is ActionCreator. It needs to return an Action with 'type' property
  return {
    type: 'BOOK_SELECTED',//type should always be a String in upper case
    payload: book
  };
}
