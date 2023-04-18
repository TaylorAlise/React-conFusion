import { Card, CardImg, CardBody, CardTitle, CardText, CardImgOverlay } from 'reactstrap';
import React from "react";

//add DishDetail component
const DishDetail = (props) => 
{
    if (props != null) {
        const dish = props;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">{RenderDish(dish)}</div>
                    <div className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        {RenderComments(dish.comments)}
                    </div>
                </div>
            </div>
        )
    }
    else {
        return(
            <div></div>
        )
        
    }
    
};

function RenderDish(dish) {
    if (dish != null) {
        return (
            <Card>
                <CardImg top width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
                
        );
    }
}

function RenderComments(comments) {
    if (comments != null) {
        const commentList = comments.map((comment) => {
            return (
                <div key={comment.id}>
                    <p>{comment.comment}</p>
                    <p>
                        -- {comment.author}, {" "}
                        {new Intl.DateTimeFormat("en-US", {
                            year:   "numeric",
                            month:  "short",
                            day:    "2-digit",
                        }).format(new Date(Date.parse(comment.date)))}
                    </p>
                </div>
            );
        });
        return <div>{commentList}</div>;
    }
    else {
        return (
            <div></div>
        )
    }
}
export default DishDetail;

