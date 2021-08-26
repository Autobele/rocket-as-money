import { useEffect } from "react";
import { api } from "../../services/api";

import { Container } from "./style";

export function TransactionsTable() {

  useEffect(() => {
    api.get('transactions')
      .then(response => console.log(response.data))
  }, [])

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de Site</td>
            <td className="deposit">R$ 7.000,00</td>
            <td>Venda</td>
            <td>20/08/2021</td>
          </tr>
          <tr>
            <td>Apartamento</td>
            <td className="withdraw">- R$ 12.000,00</td>
            <td>Aluguel</td>
            <td>21/08/2021</td>
          </tr>
          <tr>
            <td>Rodízio</td>
            <td className="withdraw">- R$ 79,00</td>
            <td>Alimentação</td>
            <td>25/08/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}