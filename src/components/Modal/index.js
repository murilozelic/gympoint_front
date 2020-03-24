import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form } from '@rocketseat/unform';

import { MdClose } from 'react-icons/md';

import { Container, TextInput } from './styles';

export default function Modal({ modalShow, onClose }) {
  const [inputCharCount, setInputCharCount] = useState(0);

  return (
    <Container modalShow={modalShow}>
      <div>
        <header>
          <strong>PERGUNTA DO ALUNO</strong>
          <button type="button" onClick={onClose}>
            <MdClose size={20} color="#666" />
          </button>
        </header>

        <span>
          Olá pessoal da academia, gostaria de saber se quando acordar devo
          ingerir batata doce e frango logo de primeira, preparar as marmitas e
          lotar a geladeira? Dou um pico de insulina e jogo o hipercalórico?
        </span>
        <strong>SUA RESPOSTA</strong>
        <Form>
          <TextInput
            name="answer"
            multiline
            placeholder="exemplo@email.com"
            maxLength="250"
            onChange={e => setInputCharCount(e.target.value.length)}
          />
        </Form>
        <span>Limite de caracteres: {250 - inputCharCount}</span>
        <button type="button" onClick={onClose}>
          Responder aluno
        </button>
      </div>
    </Container>
  );
}

Modal.propTypes = {
  modalShow: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
