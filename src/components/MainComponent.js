import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        leaders: LEADERS,
        selectedDish: null
    };
 }
    onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
    }
    
    render() {

        const HomePage = () => {
            return (
                <Home
                />
            );
        }

        

        return (

            <div>
                
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} onClick={(dishId) =>
                    this.onDishSelect(dishId)} />} />
                    <Route exact path='/aboutus' component={() => <About leaders={this.state.leaders} /> } />
                    <Redirect to="/home" />
                </Switch>

                
                <Footer />

            </div>
        );

       

    }
}
/* <DishDetail dish={this.state.dishes.filter((dish) => dish.id ===
                    this.state.selectedDish)[0]} 
                /> */
export default Main;
