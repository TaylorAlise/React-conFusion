import { Component } from "react";
import { Button } from "reactstrap";
import { Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input } from "reactstrap";

class CommentForm extends Component {    
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.toggleNav = this.toggleNav.bind(this);

    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
        isModalOpen: !this.state.isModalOpen
        });
    }
    

    render() {
       
      return (
        <div className="container"> 
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} id="formModal">
                    <ModalHeader toggle={this.toggleModal}>Submit Form</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label htmlFor="rating">Rating</Label>
                                <Input type="text" id="rating"
                                name="rating"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="yourName">Your Name</Label>
                                <Input type="text" id="yourName"
                                name="yourName"
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="comment">Comment</Label>
                                <Input type="textarea" rows="12" name="comment" />
                                
                            </FormGroup>
                            <Button type="submit" value="submit"
                            color="primary">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                
            <Button outline><span className="fa fa-pencil"></span> Submit Comment</Button>
            
        </div>

      )
    }

}
export default CommentForm;