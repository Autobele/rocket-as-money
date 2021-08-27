import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { createServer, Model } from 'miragejs';

createServer({

  models: {
    transactions: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento Web',
          amount: 6000,
          category: 'Dev',
          type: 'deposit',
          createdAt: new Date('2021-08-25 09:00:00')
        },
        {
          id: 2,
          title: 'Rodízio',
          amount: 79.99,
          category: 'Alimentação',
          type: 'withdraw',
          createdAt: new Date('2021-08-26 19:30:00')
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api';

    
    this.get('/transactions', () => {
      return this.schema.all('transactions')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      console.log(data);
      return data;
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
