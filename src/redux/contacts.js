import * as ActionTypes from './ActionTypes';

export const Contacts = (state = {
    errMess  : null,
    contacts : []
},action)=>{
    switch(action.type){
        case ActionTypes.ADD_CONTACTS:
            return {...state, isLoading:false,errMess: null,contacts: action.payload};
        case ActionTypes.CONTACTS_FAILED:
            return {...state,isLoading:false,errMess: action.payload,contacts:[]};
        case ActionTypes.ADD_CONTACT:
            var contact = action.payload;
            return {...state,contacts: state.contacts.concat(contact)}; //Adding a comment to the set of comment
        default :
            return state;
    }
}