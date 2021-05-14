import React from 'react';
import './App.css';
import Card from './Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switches : []
    };
  }

  getSwitches() {
    fetch("http://localhost:3001")
      .then(res => res.json())
      .then(res => this.setState({switches: res}))
      .catch(err => err);
  }

  renderSwitches() {
    return this.state.switches.map((x, i) =>
      <Card key={i} switch={x}/>
      )  
    }

  componentDidMount() {
    this.getSwitches();
  }
  
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        <div className="Search">
          <input className="SearchBar"></input>
        </div>
        <div className="CardContainer"> 
          {this.renderSwitches()}
        </div>
      </div>
    );
  }
  
}

export default App;
