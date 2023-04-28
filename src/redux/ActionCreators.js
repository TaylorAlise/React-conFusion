import * as ActionTypes from './ActionTypes';

export const addComment = (dishId, rating, author, comment) => ({
 type: ActionTypes.ADD_COMMENT,
 payload: {
 dishId: dishId,
 rating: rating,
 author: author,
 comment: comment
 }
});

export const addLeader = (name, image, designation, description) => ({
    type: ActionTypes.ADD_LEADER,
    payload: {
        name: name,
        image: image,
        designation: designation,
        description: description
    }
});
