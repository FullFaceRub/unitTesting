import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import fns from './Utils/App.functions';

// see user list
// given an id see a single user

class App extends Component {
  constructor() {
    super();

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fns.getUsers('/api/getAllUsers').then(res => { this.setState({ users: res }) })
  }

  render() {
    let formattedUsers = this.state.users.map((e, i) => {
      return <div key={i}>
        <h3>{e.name.first} {e.name.last}</h3>
      </div>
    })
    return (
      <div className="App">
        {formattedUsers}
      </div>
    );
  }
}

export default App;
