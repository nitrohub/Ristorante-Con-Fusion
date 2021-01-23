import React, { Component } from 'react';
import MenuComponent from './MenuComponent';
import DishDetail from './DishdetailComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {addComment, fetchDishes} from '../redux/ActionCreators';
import {actions} from 'react-redux-form';


const mapStateToProps = state=>{
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = dispatch => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => {dispatch(fetchDishes())},
    resetFeedbackForm:()=>{dispatch(actions.reset('feedback'))}
});

class MainComponent extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchDishes();
    }
    // onDishSelect(dishId) {
    //     this.setState({
    //         selectedDish: dishId
    //     });
    // }


    render() {

        const HomePage = () => {
            return(
                // extract all dishes where featured is true and filter will return an array hence index zero is mentioned
                <Home 
                dish={this.props.dishes.dishes.filter((dish)=>dish.featured)[0]}
                dishesLoading={this.props.dishes.isLoading}
                dishesErrMsg = {this.props.dishes.errmsg}
                promotion={this.props.promotions.filter((promo)=>promo.featured)[0]}
                leader={this.props.leaders.filter((leader)=>leader.featured)[0]}
                />
            );
        }

        const DishWithId = ({match}) => {
            return(
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                  isLoading={this.props.dishes.isLoading}
                  errMsg = {this.props.dishes.errmsg}
                  comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                  addComment={this.props.addComment} />
            );
          };

        return (
            <div className='App'>
                <Header />
                {/* <MenuComponent dishes={this.state.dishes} 
                    onClick={(dishId) => this.onDishSelect(dishId)}/>
                <DishdetailComponent dish={this.state.dishes.filter((dish)=> dish.id === this.state.selectedDish)[0]} /> */}
                    <Switch>
                        <Route path="/home" component = {HomePage} />
                        <Route exact path="/menu" component = {() => <MenuComponent dishes={this.props.dishes}/>} />
                        <Route path = '/menu/:dishId' component={DishWithId}/>
                        <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
                        <Route exact path="/contactus" component={()=><Contact resetFeedbackForm={this.props.resetFeedbackForm} />}/>
                        <Redirect to="/home" />
                    </Switch>
                <Footer />
            </div >

        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));