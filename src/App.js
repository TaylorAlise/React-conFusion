import logo from './logo.svg';
import './App.css';
import Menu from './components/MenuComponent';
import Main from './components/MainComponent';
import { DISHES } from './shared/dishes';
import { Component } from 'react';

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
        <Main/>
        <Menu dishes={this.state.dishes}/>
      </div>
    );
  }
 
}


export default App;
