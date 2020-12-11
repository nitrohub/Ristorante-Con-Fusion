import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import Menu from './MenuComponent';

class Dishdetail extends Component{

    componentDidMount(){
        console.log("DishDetailComponent componentDidMount constructor is invoked");
    }

    componentDidUpdate(){
        console.log("DishDetailComponent componentDidUpdate constructor is updated");
    }

    renderDish(dish){
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

    renderComments(comments){

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
    render(){
        

        console.log("Render method is called inside DishDetail");
        const dish = this.props.dish;
        if(dish!=null){
            return (
                <div className="row">
                     {this.renderDish(dish)}                      
                     {this.renderComments(dish.comments)}
                </div>
            
        );
        }else{
            return (
                <div></div>
            )
        }   
    }
}

export default Dishdetail;