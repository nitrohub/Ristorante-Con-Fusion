import React, { Component } from 'react';
import MenuComponent from './MenuComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';


//maps the the state variables to other components as props
const mapStateToProps = state =>{
    return {
        dishes : state.dishes,
        comments :state.comments,
        promotions : state.promotions,
        leaders : state.leaders
    }
}
class MainComponent extends Component {

    constructor(props) {
        super(props);
        
    }

   

    render() {

        const HomePage = () => {
            return(
                // extract all dishes where featured is true and filter will return an array hence index zero is mentioned
                <Home
                 dish={this.props.dishes.filter((dish)=>dish.featured)[0]}
                promotion={this.props.promotions.filter((promo)=>promo.featured)[0]}
                leader={this.props.leaders.filter((leader)=>leader.featured)[0]}
                />
            );
        }

        const DishWithId = ({match}) => {
            return(
                <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
                  comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
            );
          };

        return (
            <div >
                <Header />
                 <div>
                    <Switch>
                        <Route path="/home" component = {HomePage} />
                        <Route exact path="/menu" component = {() => <MenuComponent dishes={this.props.dishes}/>} />
                        <Route path = '/menu/:dishId' component={DishWithId}/>
                        <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
                        <Route exact path="/contactus" component={Contact}/>
                        <Redirect to="/home" />
                    </Switch>
                </div>
                <Footer />
            </div >

        );
    }
}


//Connecting the main component to access the store elements with the react router
export default withRouter(connect(mapStateToProps)(MainComponent));