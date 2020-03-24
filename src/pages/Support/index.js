import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import Modal from '~/components/Modal';

export default function Support() {
  const [modalShow, setModalShow] = useState(false);
  const [initialData, setInitialData] = useState({});

  function onClose() {
    setModalShow(false);
    setInitialData({});
  }

  useEffect(() => {}, []);

  return (
    <Container>
      <Modal
        modalShow={modalShow}
        onClose={onClose}
        initialData={initialData}
      />
      <strong>Pedidos de Auxílio</strong>
      <ul>
        <span>ALUNO</span>
        <li>
          <span>Murilo Zelic</span>
          <button type="button" onClick={() => setModalShow(true)}>
            responder
          </button>
        </li>
        <li>
          <span>Murilo Zelic</span>
          <button type="button">responder</button>
        </li>
        <li>
          <span>Murilo Zelic</span>
          <button type="button">responder</button>
        </li>
      </ul>
    </Container>
  );
}
