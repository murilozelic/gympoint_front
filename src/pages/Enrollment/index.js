import React from 'react';
import { MdAdd, MdCheckCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { Container } from './styles';

export default function Enrollment() {
  return (
    <Container>
      <header>
        <p>Gerenciando matrículas</p>
        <div>
          <Link to="/enrollments/edit">
            <MdAdd size={20} color="#fff" />
            CADASTRAR
          </Link>
        </div>
      </header>
      <div>
        <table>
          <tr>
            <th>ALUNO</th>
            <th>PLANO</th>
            <th>INÍCIO</th>
            <th>TÉRMINO</th>
            <th>ATIVA</th>
            <col />
            <col />
          </tr>

          <tr>
            <td>Murilo Zelic</td>
            <td>Start</td>
            <td>20 de fevereiro de 2020</td>
            <td>20 de março de 2020</td>
            <td>
              <MdCheckCircle size={20} color="#0F0" />
            </td>
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
            <td>Murilo Zelic</td>
            <td>Start</td>
            <td>20 de fevereiro de 2020</td>
            <td>20 de março de 2020</td>
            <td>
              <MdCheckCircle size={20} color="#ddd" />
            </td>
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
            <td>Murilo Zelic</td>
            <td>Start</td>
            <td>20 de fevereiro de 2020</td>
            <td>20 de março de 2020</td>
            <td>
              <MdCheckCircle size={20} color="#0F0" />
            </td>
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
        </table>
      </div>
    </Container>
  );
}
