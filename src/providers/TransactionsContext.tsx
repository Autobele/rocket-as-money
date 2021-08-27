import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';

export const TransactionsContext = createContext<Transaction[]>([]);

interface Transaction {
  id: number;
  title: string;
  type: 'deposit' | 'withdraw';
  category: string;
  createdAt: string;
  amount: number;
}

interface TransactionProviderProps {
  children: ReactNode
}

export function TransactionsProvider ({ children }: TransactionProviderProps) {

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  
  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])


  return (
    <TransactionsContext.Provider value={transactions}>
      {children}
    </TransactionsContext.Provider>
  )
}