import React from 'react';
import './App.css';
import Card from './Card';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brandFilter: false,
      nameFilter: false,
      searchTerm: '',
      switches : []
    };
  }

  getSwitches() {
    fetch("http://localhost:3001")
      .then(res => res.json())
      .then(res => this.setState({switches: res}))
      .catch(err => err);
  }

  handleInputChange = (e) => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const inputField = target.name;
    this.setState({ [inputField] : value});
  }

  renderSwitches() {
    return this.state.switches.filter(x => {
      if(this.state.nameFilter) {
        return x.name.toLowerCase().includes(this.state.searchTerm.toLowerCase());
      }
      if(this.state.brandFilter) {
        return x.brand.toLowerCase().includes(this.state.searchTerm.toLowerCase());
      }
      return true;
    })
    .map((x, i) => <Card key={i} switch={x}/>)  
    }

  componentDidMount() {
    this.getSwitches();
  }
  
  render() {
    return (
      <div className="App">
        <div className="Search">
          <input className="SearchBar" name="searchTerm" onChange={this.handleInputChange}></input>
          <div>
            <label>Brand Filter</label>
            <input type="checkbox" name="brandFilter" checked={this.state.brandFilter} onChange={this.handleInputChange}></input>
            <label>Name Filter</label>
            <input type="checkbox" name="nameFilter" checked={this.state.nameFilter} onChange={this.handleInputChange}></input>
          </div>
        </div>
        
        <div className="CardContainer"> 
          {this.renderSwitches()}
        </div>
      </div>
    );
  }
  
}

export default App;
