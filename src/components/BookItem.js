import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Popup from "reactjs-popup";

export class BookItem extends Component {

    getStyle = () => {
        return{
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            margin: '5px',
            textAlign: 'left'
        }
    }
    
    render() {
        const {amazon_product_url, book_details} = this.props.book;
        
        return (
            <div className="container">
            <div style={this.getStyle()}> 
    
                    <h><b>
                    {book_details[0].title} 
                    <Button onClick={(e) => {e.preventDefault(); window.location.href=amazon_product_url; }} style={btnStyle}>Purchase</Button>
                    </b> </h> <br></br> 

                    <ul><b> Description: </b> {book_details[0].description}</ul>
                    <ul><b> Contributed </b> {book_details[0].contributor}</ul>
                    <ul><b> Author: </b> {book_details[0].author}</ul>
                   
                    <ul>

                        <Popup trigger={<Button> View More</Button>} position="right center" >
                            <div style={popStyle}>
                                <b> Price: </b> {book_details[0].price} <br></br>
                                <b>Contributor Note: </b>{book_details[0].contributor_note} <br></br>
                                <b>Age Group: </b>{book_details[0].age_group} <br></br>
                                <b>Publisher: </b>{book_details[0].publisher} <br></br>
                                <b>Primary ISBN 13: </b>{book_details[0].primary_isbn13} <br></br>
                                <b>Primary ISBN 10: </b>{book_details[0].primary_isbn10} <br></br>
                        
                            </div>
                        </Popup>
                    </ul>      
            </div>
            </div>   
        )
    }
}

//prop types
BookItem.propTypes={
    books: PropTypes.array.isRequired
}

const btnStyle={
    background: '#92a8d1',
    color: '#000000',
    padding: '5px 9px',
    cursor: 'pointer',
    border: '2px solid #00008B',
    marginLeft: '10px'
}

const popStyle={
    background : 'white', 
    marging : '5px', 
    padding: '20px 20px',
    height: '130px',
    border: '2px solid #00008B',
    borderRadius : '5px'
}

export default BookItem
