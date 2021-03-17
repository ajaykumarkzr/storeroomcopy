// import { StoreList } from '../../../data/dummy-data';
import {
  STORE_SELECT,
  ADD_SHOP,
  ADD_TO_CART,
  REMOVE_FROM_CART,
  SET_LIST_ITEMS,
  UPDATE_ITEMS_LIST,
  UPDATE_CART_ITEM,
  EDIT_CART_ITEM,
  CLEAR_CART,
  // NAVIGATE_TO_DELIVERY_OPTIONS,
  ADD_ACCOUNT_ADDRESS,
  SELECT_DELIVERY_ADDRESS,
  DELETE_ADDRESS,
  EDIT_ADDRESS,
  ORDERED,
  STORES_WITH_CATEGORY
} from '../actions/shopdata';
import address from '../../drawercomponents/address';

function reducer(state, action) {
  switch (action.type) {
    case 'SET_LIST_ITEMS':
      let arr = state.ItemsList;
      arr[action.value.itemDetails.index] = action.value;
      return { ...state, ItemsList: arr };
  }
  if (action.type === SET_LIST_ITEMS) {
    return { ...state, ItemsList: action.value };
  }
  if (action.type === UPDATE_ITEMS_LIST) {
    let arr = state.ItemsList;
    arr[action.value.itemDetails.index] = action.value;
    return { ...state, ItemsList: arr };
  }
  if (action.type === ADD_SHOP) {
    if (state.cartItems) {
      return { ...state, selectedShop: action.value, cartItems: state.cartItems };
    }
    return { ...state, selectedShop: action.value, cartItems: [] };
  }
  if (action.type === STORES_WITH_CATEGORY) {
    return { ...state, storesWithCategory: action.value }
  }
  if (action.type === ADD_TO_CART) {
    if (state.cartItems && state.grandTotal) {
      let gtCopy = parseFloat(state.grandTotal)+parseFloat(action.value.totalForItem)
      return {...state, cartItems: [...state.cartItems, action.value], grandTotal: gtCopy};
    } else {
      let gtCopy = parseFloat(action.value.totalForItem)
      return { ...state, cartItems: [action.value], grandTotal: gtCopy };
    }
  }
  if (action.type === REMOVE_FROM_CART) {
    let cartItemsCopy = state.cartItems;
    let itemsListCopy = state.ItemsList;
    let k = cartItemsCopy.length;
    let gtCopy = 0
    for (let i = 0; i < k; i++) {
      if (cartItemsCopy[i].itemDetails.id === action.key.itemDetails.id) {
        gtCopy = parseFloat(state.grandTotal)-parseFloat(cartItemsCopy[i].totalForItem)
        cartItemsCopy.splice(i, 1);
        k -= 1;
      }
    }
    for (let i = 0; i < itemsListCopy.length; i++) {
      if (itemsListCopy[i].itemDetails.id === action.key.itemDetails.id) {
        itemsListCopy[i].base = 0;
        itemsListCopy[i].total = 0;
        itemsListCopy[i].buttonVar = 1;
        itemsListCopy[i].totalForItem = 0;
        itemsListCopy[i].added = false;
        itemsListCopy[i].removed = true;
      }
    }
    if (cartItemsCopy.length === 0) {
      gtCopy = 0
    }
    return { ...state, cartItems: cartItemsCopy, ItemsList: itemsListCopy, grandTotal: gtCopy };
  }
  if (action.type === UPDATE_CART_ITEM) {
    let cartItemsCopy = state.cartItems;
    for (let i = 0; i < cartItemsCopy.length; i++) {
      if (cartItemsCopy[i].itemDetails.id === action.value.itemDetails.id) {
        cartItemsCopy[i] = action.value;
      }
    }
    return { ...state, cartItems: cartItemsCopy };
  }
  if (action.type === CLEAR_CART) {
    let itemsListCopy = state.ItemsList
    for (let i=0; i<itemsListCopy.length; i++) {
      itemsListCopy[i].base = 0;
      itemsListCopy[i].total = 0;
      itemsListCopy[i].buttonVar = 1;
      itemsListCopy[i].totalForItem = 0;
      itemsListCopy[i].added = false;
      itemsListCopy[i].removed = true;
    }
    return { ...state, cartItems: [], grandTotal: 0, ItemsList: itemsListCopy }
  }
  if (action.type === EDIT_CART_ITEM) {
    let cartItemsCopy = state.cartItems;
    let gtCopy = state.grandTotal-parseFloat(action.value.previousTotalForItem)+parseFloat(action.value.totalForItem)
    for (let i = 0; i < cartItemsCopy.length; i++) {
      if (cartItemsCopy[i].itemDetails.id === action.value.itemDetails.id) {
        cartItemsCopy[i] = action.value;
      }
    }
    return  {...state, cartItems: cartItemsCopy, grandTotal: gtCopy };
  }
  // if (action.type === NAVIGATE_TO_DELIVERY_OPTIONS) {
  //   return { ...state, deliveryOptionsNavigation: action.value }
  // }
  if (action.type === ADD_ACCOUNT_ADDRESS) {
    if (state.accountAddress) {
      let accountAddressCopy = state.accountAddress
      accountAddressCopy = [...accountAddressCopy, action.value]
      return { ...state, accountAddress: [...state.accountAddress, action.value] }
    } else {
        return { ...state, accountAddress: [action.value] }
    }
  }
  if (action.type === SELECT_DELIVERY_ADDRESS) {
    let addressListCopy = state.accountAddress
    for (let i=0; i<addressListCopy.length; i++) {
      if (i === action.value.index) {
        let selectedCondition = addressListCopy[i].selected
        addressListCopy[i].selected = !selectedCondition
      } else {
        addressListCopy[i].selected = false
      }
    }
    return { ...state, accountAddress: addressListCopy, selectedAddress: action.value.item }
  }
  if (action.type === DELETE_ADDRESS) {
    let addressListCopy = state.accountAddress
    addressListCopy.splice(action.value, 1)
    return { ...state, accountAddress: addressListCopy }
  }
  if (action.type === EDIT_ADDRESS) {
    let addressListCopy = state.accountAddress
    addressListCopy[action.index] = action.value
    return { ...state, accountAddress: addressListCopy }
  }
  if (action.type === ORDERED) {
    console.log('action.value.ordered', action.value)
    if (state.orderList) {
      return { ...state, orderList: [...state.orderList, action.value] }
    } else {
      return { ...state, orderList: [action.value] }
    }
    
  }
  return state;
}

export default reducer;
