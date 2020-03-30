import React, { useEffect } from 'react';
import { MdAdd } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import history from '~/services/history';

import { formatPrice } from '~/util/format';
import Alert from '~/util/Alert';

import {
  loadGymPlansRequest,
  deleteGymPlanRequest,
} from '~/store/modules/gymplans/actions';

import { Container } from './styles';

export default function GymPlans() {
  const dispatch = useDispatch();
  const gymplans = useSelector(state => state.gymplans.gymplans);

  function handleEditGymplan(id) {
    history.push(`/gymplans/${id}/edit`);
  }

  function handleDeleteGymplan(id) {
    const alertParams = {
      title: 'Deletar plano de academia?',
      text: 'Esta ação no poderá ser revertida!',
      confirmButtonText: 'Sim, deletar!',
      cancelButtonText: 'Cancelar',
    };

    Alert.delete(alertParams).then(result => {
      if (result.value) {
        dispatch(deleteGymPlanRequest(id));
      }
    });
  }

  useEffect(() => {
    dispatch(loadGymPlansRequest());
  }, []); // eslint-disable-line

  return (
    <Container>
      <header>
        <p>Gerenciando planos</p>
        <div>
          <Link to="/gymplans/registration">
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
          {gymplans.length > 0 ? (
            gymplans.map(gymplan => (
              <tr key={gymplan.id}>
                <td>{gymplan.title}</td>
                <td>
                  {gymplan.duration === '1'
                    ? `${gymplan.duration} mês`
                    : `${gymplan.duration} meses`}
                </td>
                <td>{formatPrice(gymplan.price / 100)}</td>
                <td>
                  <button
                    type="button"
                    className="editStudentGridBtn"
                    onClick={() => handleEditGymplan(gymplan.id)}
                  >
                    editar
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="deleteStudentGridBtn"
                    onClick={() => handleDeleteGymplan(gymplan.id)}
                  >
                    apagar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>Sem planos cadastrados</td>
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
