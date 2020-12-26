import React,{ Component } from 'react';
import {Breadcrumb, Button, BreadcrumbItem, Label, Row, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Link } from 'react-router-dom';

//state and handleInputChange will be automatically managed by redux
class Contact extends Component {

    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleInputChange = this.handleInputChange.bind(this);
        // this.handleBlur = this.handleBlur.bind(this);
    }

    

    handleSubmit(values){
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
    }

    // handleBlur = (field) =>(event) =>{
    //     this.setState({
    //         touched : { ...this.state.touched, [field]:true }
    //     });
    // }

    // validate(firstname, lastname, telnum, email) {
    //     const errors = {
    //         firstname:'',
    //         lastname:'',
    //         telnum:'',
    //         email:'',
    //     };

    //     if(this.state.touched.firstname && firstname.length < 3){
    //         errors.firstname = 'First Name should be >= 3 characters';
    //     }else if(this.state.touched.firstname && firstname.length > 10){
    //         errors.firstname = 'First Name should be <=10 characters';
    //     }if(this.state.touched.lastname && lastname.length<3){
    //         errors.lastname = 'Last Name should be >= 3 characters';
    //     }else if(this.state.touched.lastname && lastname.length>10){
    //         errors.lastname = 'Last Name should be <=10 characters';
    //     }

    //     const reg =/^\d+$/;
    //     if(this.state.touched.telnum && !reg.test(telnum)){
    //         errors.telnum = 'Tel. Number should contain only digits'; 
    //     }

    //     if(this.state.touched.email && email.split('').filter(x=> x=== '@').length !==1){
    //         errors.email = 'Email should contain a @';
    //     }

    //     return errors;

    // }

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
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Label md={2} htmlFor="firstname" >First Name</Label>
                        <Col md={10}>  {/*md is for Colspan*/}
                            <Control.text model=".firstname" id="firstname" name="firstname" placeholder="First Name"
                            className="form-control"
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label md={2} htmlFor="lastname" >Last Name</Label>
                            <Col md={10}>
                                <Control.text model=".lastname" id="lastname" name="lastname" placeholder="Last Name"
                                className="form-control"
                                />
                            </Col>
                    </Row>
                    <Row className="form-group">
                        <Label md={2} htmlFor="telnum">Phone</Label>
                        <Col md={10}>
                            <Control.text model=".telnum" id="telnum" name="telnum" placeholder="Phone Number" 
                            className="form-control"                            
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label md={2} htmlFor="email">Email</Label>
                        <Col md={10}>
                            <Control.text model=".email" id="email" name="email" placeholder="Email"
                            className="form-control"
                            />
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Col md={{size: 6, offset: 2}}>
                            <div className="form-check">
                                <Label check>
                                    <Control.checkbox model=".agree" name="agree"
                                    className="form-check-input"
                                    /> {' '}
                                    <strong>May we contact you?</strong>
                                </Label> 
                            </div>
                        </Col>
                        <Col md={{size: 3, offset: 1}}>
                            <Control.select model=".contactType" name="contactType" 
                            className="form-control"> 
                            <option>Tel.</option>
                            <option>Email</option>
                            </Control.select>
                        </Col>
                    </Row>
                    <Row className="form-group">
                        <Label md={2} htmlFor="feedback">Feedback</Label>
                        <Col md={10}>
                            <Control.textarea model=".message" id="message" rows="12" name="feedback" placeholder="Feedback" 
                            className="form-control"
                            />
                        </Col>
                    </Row>
                    <Row row>
                        <Col md={{size: 10, offset: 2}}>
                            <Button type="submit" color="primary">
                                Send Feedback
                            </Button>
                        </Col>
                    </Row>
                    </LocalForm>
                    </div>
                </div>
            </div>
        );
    }
}

export default Contact;