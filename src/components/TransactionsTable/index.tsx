import { Container } from "./styles";

export function TransactionsTable () {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12000,00</td>
            <td>Desenvolvimento</td>
            <td>31/08/2021</td>
          </tr>

          <tr>
            <td>Aluguel Apartamento</td>
            <td className="withdraw">-R$1000,00</td>
            <td>Aluguel</td>
            <td>21/08/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  )
}