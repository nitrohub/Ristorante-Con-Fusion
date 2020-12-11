import React from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import Menu from './MenuComponent';


      function RenderDish({dish}){ //if we don't receive it inside the curly braces then it would be received as a prop
        if(dish!=null){
            return(
                    <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                        <Card key={dish.id}>
                        <CardImg width = "100%" object src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                        </Card>
                        </div>
                
            );
        }else{
            return(
                <div></div>
            );
        }
    }

    function RenderComments({comments}){

        const comment = comments.map((comment)=>{
            return (
                <ul className="list-unstyled">
                    <li>{comment.comment}</li>
                    <li>-- {comment.author} , {new Intl.DateTimeFormat('en-US', {year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                </ul>
            )
        })

        if(comment!=null){
            return (
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 m-1">
                    <h4>Comments</h4>
                    {comment}
                </div>
            )
        }else{
            return(
                <div></div>
            )
        }
    }
    
    const DishDetail = (props)=>{
        // console.log("Render method is called inside DishDetail");
        const dish = props.dish;
        if(dish!=null){
            return (
                <div className="row">
                     <RenderDish dish={dish} />                      
                     <RenderComments comments = {dish.comments} />
                </div>
            
        );
        }else{
            return (
                <div></div>
            )
        }   
    }


export default DishDetail;