import React, { useEffect, useState, useMemo } from 'react';
import { MdAdd, MdNavigateBefore, MdNavigateNext } from 'react-icons/md';
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

  const gymplans = useSelector(state => state.gymplans.plans);
  const totalPlans = useSelector(state => state.gymplans.totalPlans);
  const page = useSelector(state => state.gymplans.page);

  const [currentPage, setCurrentPage] = useState(1);

  // Alterar o valor abaixo para alterar a quantidade de resultados por pagina
  // usar const [resultsPerPage, setResultsPerPage] = useState(5) caso queira
  // alterar a quantidade durante execucao e adicionar ao useMemo abaixo como
  // dependencia para render
  const resultsPerPage = 5;

  // Math.ceil é o contrário de Math.floor. Ele retorna o valor acima da divisão
  // Se o totalPlans = 7 e resultsPerPage = 5, a diivisão será 1.4
  // O math.ceil de 1.4 será 2
  const totalPages = useMemo(() => Math.ceil(totalPlans / resultsPerPage), [
    totalPlans,
  ]);

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
        dispatch(deleteGymPlanRequest(id, currentPage));
      }
    });
  }

  function handlePreviousPage() {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  }

  function handleNextPage() {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  }

  useEffect(() => {
    // Condições para atualizar a lista de planos...
    if (
      // Planos mostrados na tela menor do que o resultados por paginas e
      // pagina menor do que total de paginas ou total de planos retornados pelo
      // backend igual a pagina * resultados por pagina.
      gymplans.length < resultsPerPage &&
      (page < totalPages || totalPlans === resultsPerPage * page)
    ) {
      dispatch(loadGymPlansRequest(currentPage, resultsPerPage));
    }

    if (gymplans.length === 0 && totalPlans !== 0)
      setCurrentPage(currentPage - 1);
  }, [currentPage, dispatch, gymplans, page, totalPages, totalPlans]);

  // Should fetch more data from backend?
  useEffect(() => {
    dispatch(loadGymPlansRequest(currentPage, resultsPerPage));
  }, [currentPage]); //eslint-disable-line

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
          {totalPlans > 0 ? (
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
        {totalPlans > resultsPerPage && (
          <tfoot>
            <tr>
              <td>
                <button type="button" onClick={() => handlePreviousPage()}>
                  <MdNavigateBefore size={24} color="#444" />
                </button>

                <span>{`Página ${page} / ${totalPages}`}</span>
                <button type="button" onClick={() => handleNextPage()}>
                  <MdNavigateNext size={24} color="#444" />
                </button>
              </td>
            </tr>
          </tfoot>
        )}
      </table>
    </Container>
  );
}
