import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import Menu from './MenuComponent';

class Dishdetail extends Component{
    constructor(props){
        super(props);
        this.state={
            selectedDish : this.props.dish
        };
    }

    renderDish(dish){
        return(
            
                <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                    <Card>
                    <CardImg width = "100%" object src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                    </Card>
                    </div>
            
        );
    }

    renderComments(comments){

        const comment = comments.map((comment)=>{
            return (
                <ul className="list-unstyled">
                    <li>{comment.comment}</li>
                    <li>-- {comment.author} , {comment.date}</li>
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
        const dish = this.state.selectedDish;
        
        return (
                <div className="row">
                    {this.renderDish(dish)}                      
                    {this.renderComments(dish.comments)}
                </div>
            
        );
    }
}

export default Dishdetail;