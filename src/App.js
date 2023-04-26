import './App.css';
//import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import { Component } from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

//pages as components
import Main from './components/MainComponent';

const store = ConfigureStore();

class App extends Component {
  render() {
    return (

      <Provider store={store}>
        <Router>
          <div className="App">
            <Main />
          </div>
        </Router>
      </Provider>
      
    );
  }
 
}


export default App;
