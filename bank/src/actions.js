export const SELECT_ACCOUNT = 'SELECT_ACCOUNT';
export const  DEPOSIT = 'DEPOSIT';
export const WITHRAW = 'WITHRAW';

export function selectAccount(data) {
  return {
    type: SELECT_ACCOUNT,
    data,
  }
}

export function deposit(data) {
  return {
    type: DEPOSIT,
    data,
  }
}

export function withdraw(data) {
  return {
    type: DEPOSIT,
    data,
  }
}