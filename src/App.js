import logo from './logo.svg';
import './App.css';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import { Component } from 'react';
import Navigation from './Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div className="App">
        <Navigation/>
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
 
}


export default App;
