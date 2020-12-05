import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/layout/Header';
import About from './components/pages/About';
import './App.css';
import GetBooks from './components/GetBooks';
import GetBookList from './components/selectlist/GetBookList';

class App extends Component {

  state={
    bookLists:[],
    books:[]
  }

  componentDidMount(){
      fetch("https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=hW0FH0IPmkMdGtd1IfEtz3oXsQOOgg22")
      .then(res => res.json())
      .then(result => this.setState({
          bookLists: result.results}))
  }


  fetchApi=(name)=>{
    const url=`https://api.nytimes.com/svc/books/v3/lists.json?list=${name}&api-key=hW0FH0IPmkMdGtd1IfEtz3oXsQOOgg22`;
    
    //const complete=`https://api.nytimes.com/svc/books/v3/lists.json?list=${name}&api-key=hW0FH0IPmkMdGtd1IfEtz3oXsQOOgg22`;
    
    fetch(url)
    .then(res => res.json())
    .then(result => this.setState({
      books: result.results}))

  }

  render(){

    //const {list_name}=this.state.bookLists;

    return (
      <Router>
        <div className="App">
          <div className='container'>
            <Header />
            
            {/* connecting to Home page */}
            <Route exact path="/" render={props=>(
              <React.Fragment>
                  <div className="dropdown"> <GetBookList bookLists={this.state.bookLists} fetchApi={this.fetchApi} /></div>
                <GetBooks bookLists={this.state.bookLists} value={this.state.value} books={this.state.books} fetchApi={this.fetchApi} />
              </React.Fragment>
            )}
            />
            
            {/* connecting to About page */}
            <Route path="/about" component={About}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
