import CartActionTypes from './cartTypes';

const toggleCartHidden = () => ({
  type: CartActionTypes.TOGGLE_CART_HIDDEN,
});

const addItem = (item) => ({
  type: CartActionTypes.ADD_ITEM,
  payload: item,
});

export { toggleCartHidden as default, addItem };
