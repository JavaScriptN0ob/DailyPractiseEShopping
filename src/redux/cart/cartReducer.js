import CartActionTypes from './cartTypes';
import addItemToCart from './cartUtils';

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (currentState = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...currentState,
        hidden: !currentState.hidden,
      };

    case CartActionTypes.ADD_ITEM:
      return {
        ...currentState,
        cartItems: addItemToCart(currentState.cartItems, action.payload),
        // cartItems: [
        //   ...currentState.cartItems,
        //   action.payload,
        // ],
      };

    default:
      return currentState;
  }
};

export default cartReducer;
