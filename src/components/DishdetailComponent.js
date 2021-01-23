import React from 'react';
import { Card, CardImg, CardBody, CardText, CardTitle } from 'reactstrap';
import { Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import CommentForm from './CommentForm';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

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
                    <Card>
                    <CardImg top src={baseUrl + dish.image} alt={dish.name} />
                        <CardBody>
                            <CardTitle style={{color:"#000"}}>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else {
            return (<div></div>)
        }
    }

    function RenderComments({comments, addComment, dishId}) {
        if (comments == null) {
            return (<div></div>)
        }
        const comment = comments.map(cmnt => {
            return (
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
            )
        })
        return (
            <div className='col-12 col-md-5 m-1'>
                <h4> Comments </h4>
                    <ul className='list-unstyled'>
                        {comment}
                    </ul>
                    <CommentForm dishId={dishId} addComment={addComment}/>
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
                     addComment = {props.addComment}
                     dishId = {props.dish.id} 
                     />
                </div>

            </div>
        )
    }

export default DishDetail;