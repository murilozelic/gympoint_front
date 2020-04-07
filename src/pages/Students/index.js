import React, { useEffect } from 'react';
import { MdAdd, MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Alert from '~/util/Alert';

import {
  loadStudentsRequest,
  deleteStudentRequest,
  loadStudentRequest,
  searchStudentsRequest,
} from '~/store/modules/student/actions';
/* import history from '~/services/history'; */

import { Container } from './styles';

export default function Students() {
  const student = useSelector(state => state.student);
  const searching = student.searchStudents;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadStudentsRequest());
  }, []); // eslint-disable-line

  function handleEditStudent(id) {
    dispatch(loadStudentRequest(id));
  }

  function handleDeleteStudent(id) {
    const alertParams = {
      title: 'Deletar estudante?',
      text: 'Esta ação no poderá ser revertida!',
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Cancelar',
    };

    Alert.delete(alertParams).then(result => {
      if (result.value) {
        dispatch(deleteStudentRequest(id));
      }
    });
  }

  function handleSearchStudent(e) {
    const { value: searchStudent } = e.target;

    if (searchStudent) {
      dispatch(searchStudentsRequest(searchStudent));
    } else {
      dispatch(loadStudentsRequest());
    }
  }

  return (
    <Container>
      <header>
        <p>Gerenciando alunos</p>
        <div>
          <Link to="/students/registration">
            <MdAdd size={20} color="#fff" />
            CADASTRAR
          </Link>
          <div>
            <MdSearch size={16} color="#999" />
            <input
              type="text"
              placeholder="Buscar aluno"
              onChange={handleSearchStudent}
            />
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
          {student.students.length > 0 ? (
            student.students.map(s => (
              <tr key={String(s.id)}>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.age}</td>
                <td>
                  <button
                    type="button"
                    className="editStudentGridBtn"
                    onClick={() => handleEditStudent(s.id)}
                  >
                    editar
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="deleteStudentGridBtn"
                    onClick={() => handleDeleteStudent(s.id)}
                  >
                    apagar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>
                {searching
                  ? 'Não há foram encontrados estudantes com esse nome'
                  : 'Não há estudantes cadastrados'}
              </td>
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
