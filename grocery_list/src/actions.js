export const ADD_ITEM = 'ADD_ITEM';
export const PURCHASE_ITEM = 'PURCHASE_ITEM';
export const SET_PURCHASED_FILTER = 'SET_PURCHASED_FILTER';
export const SET_CATEGORY_FILTER = 'SET_CATEGORY_FILTER';
export const SET_SORT_TYPE = 'SET_SORT_TYPE';

let nextItemId = 1;

export function addItem(data) {
  return {
    type: ADD_ITEM,
    item: {
      ...data,
      id: nextItemId++,
    }
  }
}

export function purchaseItem(id) {
  return {
    type: PURCHASE_ITEM,
    data: id,
  }
}

export function setPurchasedFilter(data) {
  return {
    type: SET_PURCHASED_FILTER,
    data,
  }
}

export function setCategoryFilter(data) {
  return {
    type: SET_CATEGORY_FILTER,
    data,
  }
}

export function setSortType(data) {
  return {
    type: SET_SORT_TYPE,
    data,
  }
}