import { combineReducers } from 'redux';
import { ADD_ITEM, PURCHASE_ITEM, SET_PURCHASED_FILTER, SET_CATEGORY_FILTER, SET_SORT_TYPE } from './actions';

function list(state = [], action) {
  switch(action.type) {
    case ADD_ITEM:
      return [
        ...state,
        action.item
      ]
    case PURCHASE_ITEM:
      return state.map(item => {
        if (item.id === action.data) {
          return {
            ...item,
            purchased: true,
          }
        }
        return item;
      })
    default:
      return state 
  }
}

function listFilters(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case SET_PURCHASED_FILTER:
      return action.data
    case SET_CATEGORY_FILTER:
      return action.data
    default:
      return state      
  }
}

function listSort(state = 'SORT_BY_ID', action) {
  switch (action.type) {
    case SET_SORT_TYPE:
      return action.data
    default:
      return state      
  }
}


export const groceryListApp = combineReducers({
    list,
    listFilters,
    listSort
  })