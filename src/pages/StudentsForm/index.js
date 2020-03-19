import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdDone, MdChevronLeft } from 'react-icons/md';
import history from '~/services/history';

import { Container } from './styles';

export default function FormWrapper() {
  const formName = 'Cadastro de Aluno';

  return (
    <Container>
      <header>
        <strong>{formName}</strong>
        <div>
          <button
            type="button"
            className="backBtn"
            onClick={() => history.goBack()}
          >
            <MdChevronLeft size={20} color="#fff" />
            VOLTAR
          </button>
          <button type="button" className="saveBtn">
            <MdDone size={20} color="#fff" />
            SALVAR
          </button>
        </div>
      </header>

      <Form>
        <Input name="name" label="Nome Completo" />
        <Input name="email" label="Endereço de e-mail" />
        <div>
          <Input name="name" label="Full name" />
          <Input name="name" label="Full name" />
        </div>
      </Form>
    </Container>
  );
}
