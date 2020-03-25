import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdDone, MdChevronLeft } from 'react-icons/md';
import history from '~/services/history';

import { Container, Label } from './styles';

// Utilizar o mesmo formulario para adicao e edicao de alunos
// verificar se é adição pelo id.
// id = 0 => adição
// id > 0 => edição

export default function StudentsForm({ id }) {
  console.log('id');
  return (
    <Container>
      <header>
        <strong>Cadastro de Aluno</strong>
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
        <Label>NOME COMPLETO</Label>
        <Input name="name" placeholder="Nome Completo" />
        <Label>ENDEREÇO DE E-MAIL</Label>
        <Input name="email" placeholder="exemplo@rocketseat.com" />
        <div>
          <div>
            <Label>IDADE</Label>
            <Input name="age" />
          </div>
          <div>
            <Label>PESO (em kg)</Label>
            <Input name="weight" />
          </div>
          <div>
            <Label>ALTURA</Label>
            <Input name="height" />
          </div>
        </div>
      </Form>
    </Container>
  );
}
