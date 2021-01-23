import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Form , FormGroup, FormFeedback,Label, Input} from 'reactstrap';

class CommentForm extends Component{

constructor(props){
    super(props);

    this.state = {
        isModalOpen : false,
        author : '',
        touched : {
            author : false
        }
    };
    
    this.handleComment = this.handleComment.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

}

handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
}

handleBlur = (field) => (evt) => {
    this.setState({
        touched : { ...this.state.touched, [field]: true } 
    });
}

validate(author){
    const errors = {
        author : ''
    };
    if(this.state.touched.author && author.length < 3){
        errors.author = 'Must be greater than 2 characters ';
    }if(this.state.touched.author && author.length>=15){
        errors.author = 'Must be lesser than 16 characters';
    }
    return errors;
}

toggleModal(){
    this.setState({
        isModalOpen : !this.state.isModalOpen
    });
}

toggleNav(){
    this.setState({
        isNavOpen : !this.state.isNavOpen,
    });
}

handleSubmit(values) {
    console.log('Current State is: ' + JSON.stringify(values));
    alert('Current State is: ' + JSON.stringify(values));
    this.props.resetFeedbackForm();
    // event.preventDefault();
}



render(){
    const errors = this.validate(this.state.author);
    return(
        <div>
            <Button outline onClick={this.toggleModal}><span className="fa fa-edit"></span> Submit Comment</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
            <ModalBody>
                <Form onSubmit={(values) => this.handleComment(values)}>
                    <FormGroup>
                        <Label htmlFor="rating">Rating</Label>
                        <Input type="number" id="rating" name="rating"
                        innerRef={(input)=> this.rating=input}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="author">Your Name</Label>
                        <Input type="text" id="author" name="author"
                        placeholder="Your Name"
                        value={this.state.author}
                        valid={errors.author === ''}
                        invalid={errors.author !==''}
                        onBlur = {this.handleBlur('author')}
                        onChange = {this.handleInputChange}  />
                        <FormFeedback>{errors.author}</FormFeedback>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="comment">Comment</Label>
                        <Input type="textarea" rows="6" id="Comment" name="comment" 
                        innerRef={(input) => this.comment = input}
                        />
                    </FormGroup>
                    <Button type="submit" color="primary" className="bg-primary" value="submit">Submit</Button>
                </Form>
            </ModalBody>
            </Modal>
        </div>
    )
}

}

export default CommentForm;