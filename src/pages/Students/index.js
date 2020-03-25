import React, { useEffect, useState } from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';
import api from '~/services/api';

import { Container } from './styles';

export default function Students() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    async function loadStudents() {
      const response = await api.get('students');

      const data = response.data.map(student => {
        return {
          name: student.name,
        };
      });

      setStudents(data);
    }

    loadStudents();
  }, []);

  return (
    <Container>
      <header>
        <p>Gerenciando alunos</p>
        <div>
          <Link to="/students/register">
            <MdAdd size={20} color="#fff" />
            CADASTRAR
          </Link>
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
          {students.map(student => (
            <tr>
              <td>{student.name}</td>
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
          ))}
        </tbody>
      </table>
    </Container>
  );
}
