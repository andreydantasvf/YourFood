import { useEffect, useState } from "react";

import { Request } from "../../components/Request";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { BackButton } from "../../components/BackButton";

import { api } from "../../services/api";

import { Container } from "./styles";

export function Requests() {
  const [requests, setRequests] = useState(null);

  useEffect(() => {
    async function fetchRequests() {
      const response = await api.get("/requests");
      setRequests(response.data);
    }

    fetchRequests();
  }, []);

  return (
    <Container>
      <Header />

      <main>
        <BackButton />
        
        <h2>Pedidos</h2>
        <table>
          <thead>
            <tr>
              <th>Status</th>
              <th>Código</th>
              <th>Detalhamento</th>
              <th>Pagamento</th>
            </tr>
          </thead>
          <tbody>
            {
              requests &&
              requests.map(request => (
                <Request
                  key={String(request.id)}
                  code={request.id}
                  status={request.status}
                  cartItems={request.cartItems}
                  paymentMethod={request.paymentMethod}
                />
              ))
            }
          </tbody>
        </table>
      </main>

      <Footer />
    </Container>
  )
}