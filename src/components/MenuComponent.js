import React from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';



    function RenderMenuItem({ dish, onClick }) {  //We can also send the props over here as well and we can also receive them as a json object
        return(
            <Card onClick = {() => onClick(dish.id)}>
                 <CardImg width = "100%" src={dish.image} alt={dish.name} />
                 <CardImgOverlay className="ml-5">
                     <CardTitle>{dish.name}</CardTitle>
                 </CardImgOverlay>
            </Card>
        );
    }   

    const Menu = (props)=>{

        const menu = props.dishes.map((dish)=>{
            return (
                <div key={dish.id} className = "col-12 col-md-5 m-1">
                   <RenderMenuItem dish={dish} onClick={props.onClick} />
                </div>
            )
        });
        return (
            <div className="container">
                <div className="row">
                        {menu} {/*To display menu items*/}
                </div>
            </div>
        );

    }   


export default Menu;