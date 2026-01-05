
export interface Transaction {
  id: string;
  date: string;
  merchant: string;
  category: string;
  amount: number;
  type: 'expense' | 'income';
}

export interface CardDetails {
  cardNumber: string;
  expiry: string;
  holder: string;
  brand: 'visa' | 'mastercard';
}

export interface SpendingData {
  day: string;
  amount: number;
}

export enum DashboardTab {
  OVERVIEW = 'Overview',
  ACCOUNTS = 'Accounts',
  CARDS = 'Cards',
  TRANSFERS = 'Transfers',
  SETTINGS = 'Settings'
}
