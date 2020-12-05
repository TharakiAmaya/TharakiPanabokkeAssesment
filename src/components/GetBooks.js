import React, { Component } from 'react'
import Books from './Books';


export class GetBooks extends Component {


    componentDidMount(){
        this.props.fetchApi('hardcover-fiction');
    }

  


    render() {
        return (
            <div>
                <Books books= {this.props.books} > </Books>
            </div>
        )
    }
}

export default GetBooks
