import React, { Component } from 'react';
import Contacts from './components/contacts';

class App extends Component {

/*   state = {
    contacts: []
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data })
      })
      .catch(console.log)
  } */

  render() {
    return (
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Roberto BM</h5>
          <h6 class="card-subtitle mb-2 text-muted">roberto.borjas@vallegrande.edu.pe</h6>
        </div>
      </div>

      //<Contacts contacts={this.state.contacts} />
    );
  }
}

export default App;