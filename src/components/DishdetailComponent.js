import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import CommentForm from './CommentForm';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

function RenderDish({dish}){
        if(Loading.isLoading){
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            )
        }else if(Loading.errMess){
            return(
                <div className="container">
                    <div className="row">
                        <h4>
                            {Loading.errMess}
                        </h4>
                    </div>
                </div>
            )
        }else if(dish != null) {
            return (
                <div className='col-12 col-md-5 m-1'>
                     <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                    <Card>
                    <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle style={{color:"#000"}}>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                    </FadeTransform>
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }

    function RenderComments({comments, postComment, dishId}) {
        if (comments == null) {
            return (<div></div>)
        }

        
        
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                    <ul className='list-unstyled'>
                        <Stagger in>
                        {comments.map(cmnt => {
                            return (
                                <Fade in>
                                <li key={cmnt.id}>
                                    <p>{cmnt.comment}</p>
                                    <p>-- {cmnt.author},
                                    &nbsp;
                                    {new Intl.DateTimeFormat('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: '2-digit'
                                        }).format(new Date(cmnt.date))}
                                    </p>
                                </li>
                                </Fade>
                            );
                        })}
                        </Stagger>
                    </ul>
                    <CommentForm dishId={dishId} postComment={postComment}/>
            </div>
        )
    }


    const DishDetail = (props) => {
        const dish = props.dish
        if (dish == null) {
            return (<div></div>)
        }
        return (
            <div className="container">
                <div className='row' style={{alignItems:"center"}}>
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr/>
                    </div>
                    <RenderDish dish = {props.dish} />
                    <RenderComments comments = {props.comments}
                     postComment = {props.postComment}
                     dishId = {props.dish.id} 
                     />
                </div>

            </div>
        )
    }

export default DishDetail;