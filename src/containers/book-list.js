import React, { Component } from 'react';
import { connect } from 'react-redux'; // only import a single property - connect from 'react-redux' library
import { selectBook } from '../actions/index'; // importing ActionCreator
import { bindActionCreators } from 'redux'; // ensures that the Action created by ActionCreator flows through all Reducers

class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li onClick={() => this.props.selectBook(book)} key={book.title}>{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul>
        {this.renderList()}
      </ul>
    );
  }
}

/*
    Takes in the application state as an argument
*/
function mapStateToProps(state) {
  // whatever is returned by this function will show up as props for this component
  return {
    books: state.books
  };
}
// whenever application state changes 'books' will get new value and this container
// is rendered again.

// whatever is returned by this function will show up as props for this component
// i.e this.props.selectBook
function mapDispatchToProps(dispatch) {
  // The result of selectBook ActionCreator (i.e. action) is dispatched to all Reducers
  return bindActionCreators({selectBook: selectBook}, dispatch);
}

// connect takes in a function(s) and a component and produces a container
// container is a component that is aware of the state maintained by Redux
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
