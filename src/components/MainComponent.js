import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import { LEADERS } from '../shared/leaders';
import { COMMENTS } from '../shared/comments';
import { PROMOTIONS } from '../shared/promotions';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment, addLeaders, fetchDishes,  fetchComments, fetchPromos, postComment } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

//DISPATCH
const mapDispatchToProps = dispatch => ({

    addComment: (dishId, rating, author, comment) =>
    dispatch(addComment(dishId, rating, author, comment)),
 
    fetchDishes: () => { dispatch(fetchDishes())},
    
    resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
    
    fetchComments: () => dispatch(fetchComments()),
    
    fetchPromos: () => dispatch(fetchPromos()),


    addLeaders: (name, image, designation, description) => 
    dispatch(addLeaders(name, image, designation, description)),

    postComment: (dishId, rating, author, comment) =>
    dispatch(postComment(dishId, rating, author, comment))

    

});


const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

class Main extends Component {
    constructor(props) {
    super(props);
    this.state = {
        comments: COMMENTS,
        dishes: DISHES,
        leaders: LEADERS,
        promotions: PROMOTIONS,
        selectedDish: null
    };
    }
    onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
    }

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
    }
       


    render() {
    
        
        
           

        const HomePage = (matchDispatchToProps) => {
            return (
                <Home
                    dish={this.props.dishes.dishes.filter((dish) =>
                    dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishErrMess={this.props.dishes.errMess}
                    promotion={this.props.promotions.promotions.filter((promo) =>
                    promo.featured)[0]}
                    promoLoading={this.props.promotions.isLoading}
                    promoErrMess={this.props.promotions.errMess}

                    leader={this.props.leaders}
                    postComment={this.props.postComment}

                    
                />
            );
        }

        const DishWithId = ({match}) => {
            return(
                <DishDetail dish={this.props.dishes.dishes.filter((dish) =>
                    dish.id === parseInt(match.params.dishId,10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                    comments={this.props.comments.comments.filter((comment) =>
                    comment.dishId === parseInt(match.params.dishId,10))}
                    commentsErrMess={this.props.comments.errMess}
                    addComment={this.props.addComment}
                />
                
                    
                    
            );
        };

        return (

            <div>
                <Header />
                <div>
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/aboutus' component={() => <About
                    leaders={this.props.leaders} />} />
                    <Route exact path='/menu' component={() => <Menu
                    dishes={this.props.dishes} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path='/contactus' component={() => <Contact
                    resetFeedbackForm={this.props.resetFeedbackForm} />} />                    
                    <Redirect to="/home" />
                    
                </Switch>
                </div>
                <Footer />

            </div>
        );

       

    }
}

export default withRouter(connect(mapStateToProps,
    mapDispatchToProps)(Main));
    