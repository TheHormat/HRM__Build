import { combineReducers } from "redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import aletler from "./aletler.json";

const aletlerReducer = (state = aletler) => {
  return state;
};

// sebet sehifesine sebete elave olunmushlar arrayinin oturulmesi
function basketReducerCart(state = [], action) {
  switch (action.type) {
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      return [
        ...state.slice(0, state.indexOf(action.payload)),
        ...state.slice(state.indexOf(action.payload) + 1),
      ];

    default:
      return state;
  }
}
export const addToCart = (data) => {
  return {
    type: "ADD_TO_CART",
    payload: data,
  };
};
export const deleteFromCart = (data) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: data,
  };
};

// like sehifesine liked olunmushlar arrayinin oturulmesi
function basketReducerWish(state = [], action) {
  switch (action.type) {
    case "ADD_TO_WISHLIST":
      return [...state, action.payload];
    case "REMOVE_FROM_WISHLIST":
      return [
        ...state.slice(0, state.indexOf(action.payload)),
        ...state.slice(state.indexOf(action.payload) + 1),
      ];

    default:
      return state;
  }
}
export const addToWish = (data) => {
  return {
    type: "ADD_TO_WISHLIST",
    payload: data,
  };
};
export const deleteFromWish = (data) => {
  return {
    type: "REMOVE_FROM_WISHLIST",
    payload: data,
  };
};
// sebetde umumi qiymetin hesablanmasi
function countReducerCart(state = 0, action) {
  switch (action.type) {
    case "ADDCOUNT":
      return Number(Number(state) + Number(action.payload)).toFixed(2);
    case "REMOVECOUNT":
      return Number(Number(state) - Number(action.payload)).toFixed(2);

    default:
      return state;
  }
}
export const addCount = (data) => {
  return {
    type: "ADDCOUNT",
    payload: data,
  };
};
export const removeCount = (data) => {
  return {
    type: "REMOVECOUNT",
    payload: data,
  };
};

// like sehifesinde like olunmushlarin sayinin hesablanmasi
function countReducerWish(state = 0, action) {
  switch (action.type) {
    case "ADDCOUNTWISH":
      return Number(Number(state) + 1);
    case "REMOVECOUNTWISH":
      return Number(Number(state) - 1);

    default:
      return state;
  }
}
export const addCountWish = (data) => {
  return {
    type: "ADDCOUNTWISH",
    payload: data,
  };
};
export const removeCountWish = (data) => {
  return {
    type: "REMOVECOUNTWISH",
    payload: data,
  };
};

// lazim olan aletler siyahisinin gosterilmesi
export function getAletler(sechilmishAlet) {
  if (sechilmishAlet)
    return aletler.filter((alet) => alet.alet_novu === sechilmishAlet);
  return aletler;
}

const reducers = combineReducers({
  aletlerReducer,
  basketReducerCart,
  basketReducerWish,
  countReducerCart,
  countReducerWish,
});

const configureStore = () => {
  return createStore(reducers, applyMiddleware(thunk));
};

export default configureStore;
