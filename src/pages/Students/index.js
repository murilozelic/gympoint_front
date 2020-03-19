import React from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';

import { Container } from './styles';

export default function Students() {
  return (
    <Container>
      <header>
        <p>Gerenciando alunos</p>
        <div>
          <button type="button">
            <MdAdd size={20} color="#fff" />
            <span>CADASTRAR</span>
          </button>
          <div>
            <MdSearch size={16} color="#999" />
            <input type="text" placeholder="Buscar aluno" />
          </div>
        </div>
      </header>

      <table>
        <thead>
          <tr>
            <th>NOME</th>
            <th>E-MAIL</th>
            <th>IDADE</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Murilo Zelic</td>
            <td>murilozelic@gmail.com</td>
            <td>20</td>
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
            <td>asdasd</td>
            <td>asdasd.com</td>
            <td>20</td>
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
            <td>asdasd</td>
            <td>asdasd.com</td>
            <td>20</td>
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
            <td>MuriloMuriloMuMuriloMiloMuriloMuriloMurilo</td>
            <td>silgmailgmailgmgmailgmailgmailgmail.com</td>
            <td>20</td>
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
