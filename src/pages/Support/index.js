import React, { useState, useEffect } from 'react';
import api from '~/services/api';

import { Container, FormButton, HelpOrder } from './styles';

import Modal from '~/components/Modal';

export default function Support() {
  const [modalShow, setModalShow] = useState(false);
  const [students, setStudents] = useState([]);
  const [helpOrders, setHelpOrders] = useState([]);
  const [initialData, setInitialData] = useState({});

  const questionText = 'Olá pessoal da academia';

  function onClose() {
    setModalShow(false);
    setInitialData({});
  }

  /* Aqui seria possível verificar somente o ID do usuário que está solicitando
  a pergunta, fazer uma pesquisa no state do reducer e pegar o nome do usuário.
  Como o reducer não está redondo (ou seja, durante aprendizagem nessa aplicação,
  utilizei reducer misturado com a request da api), resolvi alterar o retorno do
  backend para retornar já com o nome do usuário. O ideal seria ter todos os dados
  no reducer e pesquisar o ID do aluno e retornar o nome.

  Depos vi que o retorno é do mongoDB e não é relacional, ou seja, não tem o model
  de aluno. Vou ter que buscar no banco pelo ID. */

  async function loadStudents() {
    const response = await api.get('students');

    setStudents(response.data.status ? [] : response.data);
  }

  function loadFilters() {
    const filteredOrders = helpOrders.map(order => ({
      ...order,
      student_name: students.filter(id => id === order.student_id),
    }));

    setHelpOrders(filteredOrders);
  }

  async function loadHelpOrders() {
    await api.get('help-orders');

    loadFilters();
  }

  useEffect(() => {
    loadStudents().then(loadHelpOrders());
  }, []);

  return (
    <Container>
      <Modal
        modalShow={modalShow}
        onClose={onClose}
        initialData={initialData}
        questionText={questionText}
      />
      <strong>Pedidos de Auxílio</strong>
      <ul>
        <span>ALUNO</span>
        {helpOrders.map(helpOrder => (
          <HelpOrder>{helpOrder}</HelpOrder>
        ))}
        <li>
          <span>Murilo Zelic</span>
          <FormButton type="button" onClick={() => setModalShow(true)}>
            responder
          </FormButton>
        </li>
        <li>
          <span>Murilo Zelic</span>
          <FormButton type="button">responder</FormButton>
        </li>
        <li>
          <span>Murilo Zelic</span>
          <FormButton type="button">responder</FormButton>
        </li>
      </ul>
    </Container>
  );
}
