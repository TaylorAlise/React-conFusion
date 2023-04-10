import logo from './logo.svg';
import './App.css';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import { Component } from 'react';
import Navigation from './Navbar';
import DishDetail from './components/DishdetailComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: 0
    };
  }

  render() {
    return (
      <div className="App">
        <Navigation/>
        <Menu dishes={this.state.dishes}/>
        <DishDetail dishes={this.state.dishes[0]} />
      </div>
    );
  }
 
}


export default App;
