import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import React from "react";
import { Link } from 'react-router-dom';
import { Component } from 'react';

//add DishDetail component
const DishDetail = (props) => 
{
    if (props != null) {
        const dish = props;
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link
                        to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem
                        active>{props.dyish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            </div>

        );
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

class CommentForm extends Component {
    render() {
      return (
        <div className="container"> 
            <Button outline><span className="fas fa-pencil-alt"></span>Submit Comment</Button>
        </div>
      )
    }
  }

function RenderComments({comments, addComment, dishId}) {
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

    <CommentForm dishId={dishId} addComment={addComment} />
    this.props.addComment(this.props.dishId, values.rating,
        values.author, values.comment);
    <RenderComments comments={props.comments}
        addComment={props.addComment}
        dishId={props.dish.id}
    />       
    


}
export default DishDetail;

