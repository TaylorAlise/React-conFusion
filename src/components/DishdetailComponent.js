import { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, CardImgOverlay } from 'reactstrap';
import { DISHES } from '../shared/dishes';


//add DishDetail component
class DishDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
        };
    }

    renderDish(dish) {
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

    renderComments(comments) {
        if(comments==null){
            return(
                <div></div>
            )
        }
        const showComments = comments.map((cmnt) => {
            return(
                <li key={cmnt.id}>
                    <p>cmnt.comment</p>
                    <p>--cmnt.author,cmnt.date</p>
                </li>
            )
        });

        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {showComments}
            </div>
        )
    }

    render() {
        const dish = this.props.dish;
        if(dish == null)
        {
            return(
                <div></div>
            )
        }
        const dishItem = this.renderDish(dish);
        const dishComment = this.renderComments(dish.comments);
    
        <div className="container">
            {dishItem}
            {dishComment}
        </div>
    }


}
export default DishDetail;