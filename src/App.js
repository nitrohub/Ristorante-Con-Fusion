import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
// import Menu from './components/MenuComponent';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();
// import Dishdetail from './components/DishdetailComponent';
class App extends Component {
render(){

 return (
   //To provide the store to all the components in the react app
   <Provider store = {store}>  
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
   </Provider>
 );
}
}
export default App;
