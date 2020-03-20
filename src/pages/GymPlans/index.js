import React from 'react';
import { MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function GymPlans() {
  return (
    <Container>
      <header>
        <p>Gerenciando planos</p>
        <div>
          <Link to="/gymplans/edit">
            <MdAdd size={20} color="#fff" />
            CADASTRAR
          </Link>
        </div>
      </header>

      <table>
        <thead>
          <tr>
            <th>TÍTULO</th>
            <th>DURAÇÃO</th>
            <th>VALOR p/ MÊS</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Start</td>
            <td>1 mês</td>
            <td>R$ 129,00</td>
            <td>
              <button type="button" className="editStudentGridBtn">
                editar
              </button>
            </td>
            <td>
              <button type="button" className="deleteStudentGridBtn">
                apagar
              </button>
            </td>
          </tr>
          <tr>
            <td>Gold</td>
            <td>3 mês</td>
            <td>R$ 109,00</td>
            <td>
              <button type="button" className="editStudentGridBtn">
                editar
              </button>
            </td>
            <td>
              <button type="button" className="deleteStudentGridBtn">
                apagar
              </button>
            </td>
          </tr>
          <tr>
            <td>Diamond</td>
            <td>6 mês</td>
            <td>R$ 89,00</td>
            <td>
              <button type="button" className="editStudentGridBtn">
                editar
              </button>
            </td>
            <td>
              <button type="button" className="deleteStudentGridBtn">
                apagar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
