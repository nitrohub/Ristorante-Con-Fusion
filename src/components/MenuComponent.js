import React, {Component} from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';


class Menu extends Component{
    constructor(props){
        super(props);
        console.log("Menu Component Constructor is invoked!");
    }

    // componentDidMount(){
    //     console.log("Menu Component componentDidMount constructor is invoked");
    // }


    // renderDish(dish){
    //     if(dish!=null){
    //         return(
    //             <Dishdetail dish={dish}/>
    //         )
    //     }else{
    //         return(
    //             <div></div>
    //         )
    //     }
    // }
    render(){

        const menu = this.props.dishes.map((dish)=>{
            return (
                <div  className = "col-12 col-md-5 m-1">
                    <Card key = {dish.id} onClick={()=> this.props.onClick(dish.id)}>
                            <CardImg width = "100%" object src={dish.image} alt={dish.name} />
                        <CardImgOverlay body className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            )
        });
        return (
            <div className="container">
                <div className="row">
                        {menu} {/*To display menu items*/}
                </div>
                    
                    {/* {this.renderDish(this.state.selectedDish)} */}
            </div>
        );
    }
}

export default Menu;