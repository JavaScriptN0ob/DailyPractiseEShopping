import CartActionTypes from './cartTypes';

const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

const clearItemFromCart = (item) => ({
  type: CartActionTypes.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export { toggleCartHidden as default, addItem, clearItemFromCart };
