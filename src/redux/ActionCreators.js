import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const addContact = (contact)=>({
  type:ActionTypes.ADD_CONTACT,
  payload:contact
});

export const postContact = (firstname,lastname,telnum,email) =>(dispatch)=>{
   const newContact = {
     firstname : firstname,
     lastname  : lastname,
     telnum    : telnum,
     email     : email
   }

   newContact.date = new Date().toISOString();
   return fetch(baseUrl+'contacts',{
     method: 'POST',
     body: JSON.stringify(newContact),
     headers:{
       'Content-Type':'application/json'
     },
     credentials:'same-origin'
   })
   .then(response => {
    if (response.ok) {
      return response;
    } else {
        
      var error = new Error('Error ' + response.status + ': ' + response.statusText);
      error.response = response;
      throw error;
    }
  },
  error => {
    
        var errmess = new Error(error.message);
        throw errmess;
  }).then(response => response.json())
  .then(response => dispatch(addContact(response)))
  .catch(error => {console.log('Post contact',error.message)
      alert("Your contacts could not be posted\nError:"+error.message)})
}



export const addComment = (comment)=>({
    type: ActionTypes.ADD_COMMENT,
    payload : comment
});




export const leadersFailed = (errmess)=>({
    type :ActionTypes.LEADERS_FAILED,
    payload: errmess
});

export const leadersLoading = () =>({
    type: ActionTypes.LEADERS_LOADING
});

export const fetchLeaders = () => (dispatch) => {
    
    dispatch(leadersLoading(true));

    return fetch(baseUrl + 'leaders')
    .then(response => {
        if (response.ok) {
          return response;
        } else {            
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(leaders => dispatch(addLeaders(leaders)))
    .catch(error => dispatch(leadersFailed(error.message)));
}

export const fetchDishes = () => (dispatch) => {
    
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
            
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
        
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)));
}

export const postComment = (dishId, rating, author, comment)=>(dispatch)=>{
    const newComment = {
        dishId :dishId,
        rating :rating,
        author : author,
        comment: comment
    }

    newComment.date = new Date().toISOString();
    return fetch(baseUrl+'comments',{
        method : 'POST',
        body   : JSON.stringify(newComment),
        headers: {
            'Content-Type':'application/json'
        },
        credentials:'same-origin'
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
            
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {        
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error=> {console.log('Post Comments',error.message);
    alert('Your comment could not be posted\nError:'+error.message);
})
}

export const dishesLoading = () =>({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess)=>({
    type :ActionTypes.DISHES_FAILED,
    payload: errmess
});

export const addDishes = (dishes) => ({
    type : ActionTypes.ADD_DISHES,
    payload : dishes
});

export const addLeaders = (leaders)=>({
    type :ActionTypes.ADD_LEADER,
    payload:leaders
   })

export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};

export const commentsFailed = (errmess)=>({
    type :ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type : ActionTypes.ADD_COMMENTS,
    payload : comments
});


export const fetchPromos = () => (dispatch) => {
    console.log("Inside Fetch Promos!");
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
            console.log("Error in Fetching");
          
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            console.log("INside the Eror!");
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () =>({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess)=>({
    type :ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type : ActionTypes.ADD_PROMOS,
    payload : promos
});