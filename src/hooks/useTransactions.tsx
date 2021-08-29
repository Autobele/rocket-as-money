import { useContext } from 'react';
import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from '../services/api';

const TransactionsContext = createContext<TransactionProviderData>({} as TransactionProviderData);

interface Transaction {
  id: number;
  title: string;
  type: string;
  category: string;
  createdAt: string;
  amount: number;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionProviderProps {
  children: ReactNode
}

interface TransactionProviderData {
  transactions: Transaction[];
  createNewTransaction: (transaction: TransactionInput) => Promise<void>;
}

export function TransactionsProvider ({ children }: TransactionProviderProps) {

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  
  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])


  async function createNewTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      id: transactions.length + 1,
      ...transactionInput,
      createdAt: new Date()
    });
    const transaction = response.data;

    setTransactions([
      ...transactions,
      transaction
    ])
  }

  return (
    <TransactionsContext.Provider value={{
      transactions,
      createNewTransaction
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}


export function useTransactions() {
  return useContext(TransactionsContext)
}