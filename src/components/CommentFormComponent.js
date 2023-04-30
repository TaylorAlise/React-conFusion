import { Component } from "react";
import { Button } from "reactstrap";

class CommentForm extends Component {    
    
    render() {
       
      return (
        <div className="container"> 
                
                
            <Button outline><span className="fa fa-pencil"></span> Submit Comment</Button>
            
        </div>

      )
    }

}
export default CommentForm;