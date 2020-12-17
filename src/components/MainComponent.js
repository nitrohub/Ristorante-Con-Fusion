import React, { Component } from 'react';
import Menu from './MenuComponent';
import Home from './HomeComponent';
import { DISHES } from '../shared/dishes';
import Dishdetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch, Route, Redirect} from 'react-router-dom';


class Main extends Component{

  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES
    }
  }

 
render(){

  const HomePage = () => {
    return (
        <Home/>
    );
  }
  const disht = this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0];
  // console.log("Dish TV = ",disht);
 return (
    <div>
      
             <Header />
              <Switch>
                <Route path="/home" component={Home} />
                <Route exact path="/menu" component={()=> <Menu dishes={this.state.dishes} />} /> /* in this way you can pass in the props inside the menu component */
                <Redirect to="/home" />
              </Switch>
             <Footer />
    </div>
  );
}
}
export default Main;
  