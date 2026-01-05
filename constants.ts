
import { Transaction, SpendingData } from './types';

export const MOCK_TRANSACTIONS: Transaction[] = [
  { id: '1', date: '2023-10-24', merchant: 'Apple Store', category: 'Electronics', amount: -1299.00, type: 'expense' },
  { id: '2', date: '2023-10-23', merchant: 'Salary Deposit', category: 'Income', amount: 4500.00, type: 'income' },
  { id: '3', date: '2023-10-22', merchant: 'Amazon', category: 'Shopping', amount: -84.50, type: 'expense' },
  { id: '4', date: '2023-10-21', merchant: 'Starbucks', category: 'Food & Drink', amount: -12.40, type: 'expense' },
  { id: '5', date: '2023-10-20', merchant: 'Iberdrola Utilities', category: 'Bills', amount: -120.00, type: 'expense' },
  { id: '6', date: '2023-10-19', merchant: 'Netflix Subscription', category: 'Entertainment', amount: -17.99, type: 'expense' },
];

export const MOCK_SPENDING_HISTORY: SpendingData[] = [
  { day: 'Mon', amount: 400 },
  { day: 'Tue', amount: 300 },
  { day: 'Wed', amount: 600 },
  { day: 'Thu', amount: 800 },
  { day: 'Fri', amount: 500 },
  { day: 'Sat', amount: 900 },
  { day: 'Sun', amount: 200 },
];

export const COLORS = {
  primary: '#006DFF',
  secondary: '#1A1C1E',
  background: '#F8FAFC',
  success: '#10B981',
  error: '#EF4444',
};
