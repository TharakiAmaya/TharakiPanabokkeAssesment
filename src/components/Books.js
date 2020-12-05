import React, { Component } from 'react'
import BookItem from './BookItem';
import PropTypes from 'prop-types';

export class Books extends Component {
    render() {

        return this.props.books.map((book)=>(
            <BookItem book={book}>               
            </BookItem>
        ));
    }
}
BookItem.propTypes={
    books: PropTypes.array.isRequired
}
export default Books
