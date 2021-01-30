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
import {postContact, postComment, fetchLeaders,fetchDishes,fetchComments,fetchPromos } from '../redux/ActionCreators';
import {actions} from 'react-redux-form';
import {TransitionGroup,CSSTransition} from 'react-transition-group';
 
const mapStateToProps = state=>{
    return {
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    }
}

const mapDispatchToProps = dispatch => ({
    postContact:(firstname,lastname,telnum,email) => dispatch(postContact(firstname,lastname,telnum,email)),
    postComment:(dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    fetchDishes:()=> {dispatch(fetchDishes())},
    resetFeedbackForm:()=>{dispatch(actions.reset('feedback'))},
    fetchComments:() => dispatch(fetchComments()),
    fetchPromos:() => dispatch(fetchPromos()),
    fetchLeaders:() => dispatch(fetchLeaders())
});

class MainComponent extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }
    

    render() {

        const HomePage = () => {
            return(
                // extract all dishes where featured is true and filter will return an array hence index zero is mentioned
                <Home
                dishesLoading={this.props.dishes.isLoading}
                
                dish = {this.props.dishes.dishes.filter((dish)=> dish.featured)[0]}

                dishErrMess={this.props.dishes.errMess}
                
                promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                
                promoLoading={this.props.promotions.isLoading}
                
                promoErrMess={this.props.promotions.errMess}

                leader = {this.props.leaders.leaders.filter((leader)=>leader.featured)[0]}

                leadersLoading = {this.props.leaders.isLoading}

                leadErrMess = {this.props.leaders.errMess}
                />
            );
        }

        const DishWithId = ({match}) => {
            return(
                <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]}
                isLoading={this.props.dishes.isLoading}
                errMess={this.props.dishes.errMess}
                comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
                commentsErrMess={this.props.comments.errMess}
                postComment={this.props.postComment}
              />
            );
          };

        return (
            <div className='App'>
                <Header />                
                <TransitionGroup> 
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch>
                            <Route path="/home" component = {HomePage} />
                            <Route exact path="/menu" component = {() => <MenuComponent dishes={this.props.dishes}/>} />
                            <Route path = '/menu/:dishId' component={DishWithId}/>
                            <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
                            <Route exact path="/contactus" component={()=><Contact resetFeedbackForm={this.props.resetFeedbackForm} postContact={this.props.postContact} />}/>
                            <Redirect to="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div >

        );
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));