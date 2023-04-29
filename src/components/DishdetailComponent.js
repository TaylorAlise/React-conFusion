import { Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem, Button } from 'reactstrap';
import React, {userState} from "react";
import { Link } from 'react-router-dom';
import { Component } from 'react';
import { Modal } from 'reactstrap';
import { Form, Input } from 'reactstrap';

//add DishDetail component
const DishDetail = (props) => 
{
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
    }



    if (props != null) {
        const dish = props;
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link
                        to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem
                        active>{props.dish.name}</BreadcrumbItem>
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
                    <div className="col-12 col-md-5 m-1">
                        <CommentForm />
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



class CommentForm extends Component {    
    state = {
        isOpen: false
    };

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    render() {
       
      return (
        <div className="container"> 
            <Modal show={this.state.isOpen} onHide={this.closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Submit Comment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        ..
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Input type="submit" value="Submit" />
                    <Button className="btn-secondary" onClick={this.closeModal}>Close</Button>
                </Modal.Footer>
            </Modal>
            <Button outline onClick={this.openModal}><span className="fa fa-pencil"></span> Submit Comment</Button>
            
        </div>

      )
    }
}

   /* <CommentForm dishId={dishId} addComment={addComment} />
    this.props.addComment(this.props.dishId, values.rating,
        values.author, values.comment);
    <RenderComments comments={props.comments}
        addComment={props.addComment}
        dishId={props.dish.id}
    /> */      
    
export default DishDetail;

