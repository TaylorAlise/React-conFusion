import { Component } from "react";
import { Button } from "reactstrap";
//import React, { userState } from "react";
import { Control, Errors, actions } from 'react-redux-form';
import { Modal, ModalBody, ModalHeader, Form, FormGroup, Label, Input } from "reactstrap";

class CommentForm extends Component {   
    
    constructor(props) {
        super(props);
        this.state = { 
            modal: false 
        };

        this.toggle = this.toggle.bind(this);

    }


    toggle() {
        this.setState({
        modal: !this.state.modal
        });
    }

    
    handleSubmit(values) {
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        this.props.resetFeedbackForm();
        // event.preventDefault();
    }
   

    render() {
      //const errors = this.validate(this.state.yourName);

        return (
            <div className="container"> 
                <Button outline onClick={this.toggle}><span className="fa fa-pencil"></span> Submit Comment</Button>

                <Modal fade={false} isOpen={this.state.modal} toggle={this.toggle} id="formModal">
                    <ModalHeader toggle={this.toggle}>Submit Form</ModalHeader>
                    <ModalBody>
                            <Form model="feedback" onSubmit={(values) => this.handleSubmit(values)}>
                                <FormGroup>
                                    <Label htmlFor="rating">Rating</Label>
                                    <Input type="select" name="backdrop">
                                        <option value=""> </option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="yourName">Your Name</Label>
                                    <Input type="text" id="yourName" 
                                      // value={this.state.yourName} 
                                       //valid={errors.yourName === ''}
                                        //invalid={errors.yourName !== ''}
                                        //onBlur={this.handleBlur('yourName')} 
                                        
                                    />
                                </FormGroup>
                                <FormGroup>
                                    <Label htmlFor="comment">Comment</Label>
                                    <Input type="textarea" rows="12" name="comment" />
                                
                                </FormGroup>
                                <Button type="submit" value="submit"
                                color="primary" onClick={this.toggle}>Submit</Button>
                            </Form>
                    </ModalBody>
                </Modal>
                
            </div>

        )
    }

}
export default CommentForm;