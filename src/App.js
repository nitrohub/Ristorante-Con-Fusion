import React, { Component } from 'react';
import Main from './components/MainComponent';
import './App.css';
import Menu from './components/MenuComponent';
import { BrowserRouter } from 'react-router-dom';
// import Dishdetail from './components/DishdetailComponent';
class App extends Component {

render(){
 return (
   <BrowserRouter>
    <div>
      <Main />
    </div>
   </BrowserRouter>
  );
}
}
export default App;
