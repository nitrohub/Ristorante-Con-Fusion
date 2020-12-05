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

    render(){
        const dish = this.state.selectedDish;
        const comment = dish.comments.map((comment)=>{
            return(
                <div>
                    <div>{comment.comment}</div>
                    <div>-- {comment.author}</div>
                </div>
            )
        })
        
        return (
            
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-5 m-1">
                    <Card>
                    <CardImg width = "100%" object src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                    </Card>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-5 col-lg-5 m-1">
                        <h4>Comments</h4>
                            {comment}
                    </div>
                </div>
            
        );
    }
}

export default Dishdetail;