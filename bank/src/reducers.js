import { SELECT_ACCOUNT, DEPOSIT, WITHDRAW } from './actions';

const initialState = {
  accounts: [
    {
      id: 1,
      name: 'Dick Stein',
      balance: 11
    },
    {
      id: 2,
      name: 'Warren B',
      balance: 87000000000
    }
  ],
  currentAccount: null,
}

function bank(state = initialState, action) {
  switch (action.type) {
    case SELECT_ACCOUNT:
      return {
        ...state,
        currentAccount: state.accounts.filter(account => {
          if ( account.name === action.data || account.id === action.data ) {
            return account
          }
          return {};
        })[0]
      }
    case DEPOSIT:
      return state.accounts.map(account => {
        if (account.id === action.data.id) {
          return {
          ...account,
          balance: account.balance + action.data.amount
          }
        }
        return account
        })
    case WITHDRAW:
      return state.accounts.map(account => {
        if (account.id === action.data.id) {
          return {
          ...account,
          balance: account.balance - action.data.amount
          }
        }
        return account
        })
    default: 
      return state;
  }
}

export default bank;