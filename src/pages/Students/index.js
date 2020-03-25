import React, { useEffect } from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadStudentsRequest } from '~/store/modules/student/actions';
import history from '~/services/history';

import { Container } from './styles';

export default function Students() {
  const students = useSelector(state => state.student.students);
  const dispatch = useDispatch();

  function handleEditStudent(id) {
    history.push('/students/edit', id);
  }

  useEffect(() => {
    dispatch(loadStudentsRequest());
  }, []); // eslint-disable-line

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
          {students.length > 0 ? (
            students.map(student => (
              <tr key={student.id}>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.age}</td>
                <td>
                  <button
                    type="button"
                    className="editStudentGridBtn"
                    onClick={() => handleEditStudent(student.id)}
                  >
                    editar
                  </button>
                </td>
                <td>
                  <button type="button" className="deleteStudentGridBtn">
                    apagar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>Não há estudantes cadastrados</td>
              <td>-</td>
              <td>-</td>
              <td />
              <td />
            </tr>
          )}
        </tbody>
      </table>
    </Container>
  );
}
