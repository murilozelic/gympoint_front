import React, { useEffect } from 'react';
import { MdAdd, MdCheckCircle } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Alert from '~/util/Alert';

import history from '~/services/history';

import { Container } from './styles';

import {
  loadEnrollmentsRequest,
  deleteEnrollmentRequest,
} from '~/store/modules/enrollment/actions';

export default function Enrollment() {
  const dispatch = useDispatch();
  const enrollments = useSelector(state => state.enrollment.enrollments);

  useEffect(() => {
    dispatch(loadEnrollmentsRequest());
  }, []); // eslint-disable-line

  function handleEditEnrollment(id) {
    history.push(`/enrollments/${id}/edit`);
  }

  function handleDeleteEnrollment(id) {
    const alertParams = {
      title: 'Deletar matrícula?',
      text: 'Esta ação no poderá ser revertida!',
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Cancelar',
    };

    Alert.delete(alertParams).then(result => {
      if (result.value) {
        dispatch(deleteEnrollmentRequest(id));
      }
    });
  }

  return (
    <Container>
      <header>
        <p>Gerenciando matrículas</p>
        <div>
          <Link to="/enrollments/registration">
            <MdAdd size={20} color="#fff" />
            CADASTRAR
          </Link>
        </div>
      </header>
      <div>
        <table>
          <thead>
            <tr>
              <th>ALUNO</th>
              <th>PLANO</th>
              <th>INÍCIO</th>
              <th>TÉRMINO</th>
              <th>ATIVA</th>
              <td />
              <td />
            </tr>
          </thead>

          <tbody>
            {enrollments.length > 0 ? (
              enrollments.map(enrollment => (
                <tr key={enrollment.id}>
                  <td>{enrollment.Student.name}</td>
                  <td>{enrollment.GymPlan.title}</td>
                  <td>{enrollment.start_date}</td>
                  <td>{enrollment.end_date}</td>
                  <td>
                    {enrollment.active ? (
                      <MdCheckCircle size={20} color="#0F0" />
                    ) : (
                      <MdCheckCircle size={20} color="#eee" />
                    )}
                  </td>
                  <td>
                    <button
                      type="button"
                      style={{ color: '#4d85ee' }}
                      onClick={() => handleEditEnrollment(enrollment.id)}
                    >
                      editar
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      style={{ color: '#de3b3b' }}
                      onClick={() => handleDeleteEnrollment(enrollment.id)}
                    >
                      apagar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>Não há matrículas cadastradas</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td>-</td>
                <td />
                <td />
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
