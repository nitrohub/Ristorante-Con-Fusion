import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';

class Main extends Component{

  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish:null
    }
  }

  
  onDishSelect(dishId){
    // console.log("Selected Dish = "+dishId);
    this.setState({ selectedDish: dishId });
}
 
render(){
  const disht = this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0];
  // console.log("Dish TV = ",disht);
 return (
    <div className="App">
      <Navbar dark color="primary">
        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
      </Navbar>
      <div className="container">
             <Menu dishes={this.state.dishes} onClick={(dishId)=> this.onDishSelect(dishId)} /> 
             <Dishdetail dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]} />
      </div>
    </div>
  );
}
}
export default Main;
  