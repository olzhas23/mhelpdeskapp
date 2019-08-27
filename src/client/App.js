import React, { Component } from 'react';
import axios from 'axios';
import TableOutput from './components/Table.js';
import SearchButton from './components/Button.js';
export default class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }
  }


  componentDidMount() {
    axios.get('http://localhost:3000/api/templates')
    .then(res => {
      this.setState({items:res.data})
    })
  }


  render() {
    if (this.state.items == 'undefined') {
      return <h1> Empty </h1>
    }
    return (
      <div className="App">
      <SearchButton />
      <TableOutput items={this.state.items} />
    </div>
  
    );
  }

}
