//import logo from './logo.svg';
import './App.css';
//import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';



//pages as components
import Main from './components/MainComponent';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Main />
        </div>
      </Router>
    );
  }
 
}


export default App;
