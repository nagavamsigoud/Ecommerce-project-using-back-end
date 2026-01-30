import {configureStore} from "@reduxjs/toolkit";

import ProjectReducer from "./Redux/Slice";
import FilterReducer from "./Redux/FilterSlice";
import CartReducer from "./Redux/CartSlice"

// to save in local storage step 1
const loadCartFromLocalStorage=()=>{
    try{
        const serializedState=localStorage.getItem('cartState');
        return serializedState ? JSON.parse(serializedState):undefined; 
    }catch(e){
        console.warn("Could not load cart from localStorage:",e);
        return undefined;
  
    }
};
//step 2
//Save cart to localStorage
const saveCartToLocalStorage=(state)=>{
    try{
        const serializedState=JSON.stringify(state.CartSlice);
        localStorage.setItem('cartState',serializedState);
        console.log("in local storage",serializedState);
    }catch(e){
        console.warn("Could not save cart to localStorage:",e);
    }
};

export const store=configureStore({
    reducer:{
        products:ProjectReducer,
        
        FilterSlice:FilterReducer,

        CartSlice:CartReducer,
      

    }, //step 3
    preloadedState:{
        CartSlice:loadCartFromLocalStorage()
    },
});

//step 4 
store.subscribe(()=>{
    saveCartToLocalStorage(store.getState());
});



