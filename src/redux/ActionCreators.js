import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';
import { DISHES } from '../shared/dishes'
 
export const addComment = (dishId, rating, author, comment) => ({
 type: ActionTypes.ADD_COMMENT,
 payload: {
 dishId: dishId,
 rating: rating,
 author: author,
 comment: comment
 }
});

//action object
export const addLeader = (id, name, image, designation, description) => ({
    type: ActionTypes.ADD_LEADER,
    //value that contains what a user is sending and it will be used to ...
    //update the state of the application
    payload: {
        id: id,
        name: name,
        image: image,
        designation: designation,
        description: description
    }
});

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true));

    setTimeout ( () => {
        dispatch(addDishes(DISHES));
    }, 2000);
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errMess) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errMess
});

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});
