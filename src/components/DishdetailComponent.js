import { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, CardImgOverlay } from 'reactstrap';
import { DISHES } from '../shared/dishes';

function renderComments(comments) {
    if(comments==null){
        return(
            <div></div>
        )
    }
    const showComments = comments.map((cmnt) => {
        return(
            <ul key={comments.id} className="list-unstyle">
            <li className="mb-2">
                <p>cmnt.comment</p>
                <p>--cmnt.author,cmnt.date</p>
            </li>
            </ul>
        )
    });

    return(
        <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            {showComments}
        </div>
    )
}

function renderDish({dish}) {
    if (dish != null) {
        return (
            <div key={dish.id} className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            </div>
        )
    }
    else {
        return (
            <div></div>
        )
    }
}

//add DishDetail component
 const DishDetail = (props) => 
    {
        const dish = props;
        console.debug('dish');
        console.debug(dish);
        if(dish == null)
        {
            return(
                <div></div>
            )
        }
        else {
            return(
                <div className="container">
                {renderDish({dish})}
                {renderComments(dish.comments)}
                </div>
            )
            
        }
        
    }

export default DishDetail;
