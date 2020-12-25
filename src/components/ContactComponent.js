import React,{ Component } from 'react';
import {Breadcrumb, Button, BreadcrumbItem, Form , FormGroup, Label, Col, Input } from 'reactstrap';
import { Link } from 'react-router-dom';

class Contact extends Component {

    constructor(props){
        super(props);

        this.state = {
            firstname:'',
            lastname:'',
            telnum:'',
            email:'',
            agree:false,
            contactType: 'Tel.',
            message: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name; 

        this.setState({
            [name] : value
        })
    }

    handleSubmit(event){
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }

    render(){
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to='/home'>Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr/>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                    <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                            <h5>Our Address</h5>
                            <address>
                            121, Abc def ghi jkl<br />
                            Abc def ghi, mno<br />
                            INDIA<br />
                            <i className="fa fa-phone"></i>: +91 01234 56789<br />
                            <i className="fa fa-fax"></i>: +91 98765 43210<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                            </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+910123456789"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send Us Your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">

                    <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <Label md={2} htmlFor="firstname" >First Name</Label>
                        <Col md={10}>  {/*md is for Colspan*/}
                            <Input type="text" id="firstname" name="firstname" placeholder="First Name" value={this.state.firstname}
                            onChange={this.handleInputChange}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label md={2} htmlFor="lastname" >Last Name</Label>
                            <Col md={10}>
                                <Input type="text" id="lastname" name="lastname" placeholder="Last Name" value={this.state.lastname} 
                                onChange={this.handleInputChange}/>
                            </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label md={2} htmlFor="telnum">Phone</Label>
                        <Col md={10}>
                            <Input type="tel" id="telnum" name="telnum" placeholder="Phone Number" value={this.state.telnum}
                            onChange = {this.handleInputChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label md={2} htmlFor="email">Email</Label>
                        <Col md={10}>
                            <Input type="text" id="email" name="email" placeholder="Email" value={this.state.email} 
                            onChange = {this.handleInputChange}
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={{size: 6, offset: 2}}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" onChange={this.handleInputChange} name="agree"
                                    checked={this.state.agree} /> {' '}
                                    <strong>May we contact you?</strong>
                                </Label> 
                            </FormGroup>
                        </Col>
                        <Col md={{size: 3, offset: 1}}>
                            <Input type="select" name="contactType"
                            value={this.state.contactType} 
                            onChange={this.handleInputChange}
                            > 
                            <option>Tel.</option>
                            <option>Email</option>
                        </Input>
                        </Col>

                    </FormGroup>
                    <FormGroup row>
                        <Label md={2} htmlFor="feedback">Feedback</Label>
                        <Col md={10}>
                            <Input type="textarea" id="message" rows="12" name="feedback" placeholder="Feedback" value={this.state.feedback} 
                            onChange={this.handleInputChange}/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={{size: 10, offset: 2}}>
                            <Button type="submit" color="primary">
                                Send Feedback
                            </Button>
                        </Col>
                    </FormGroup>
                    </Form>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;