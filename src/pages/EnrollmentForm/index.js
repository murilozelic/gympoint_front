import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdDone, MdChevronLeft } from 'react-icons/md';
import history from '~/services/history';

import { Container, Label } from './styles';

export default function EnrollmentForm() {
  return (
    <Container>
      <header>
        <strong>Edição de matrícula</strong>
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
        <Label>ALUNO</Label>
        <Input name="name" placeholder="Diego Fernandes" />
        <div>
          <div>
            <Label>PLANO</Label>
            <Input name="gymplan" />
          </div>
          <div>
            <Label>DATA DE INÍCIO</Label>
            <Input name="init_date" />
          </div>
          <div>
            <Label>DATA DE TÉRMINO</Label>
            <Input name="end_date" />
          </div>
          <div>
            <Label>VALOR FINAL</Label>
            <Input name="total_price" />
          </div>
        </div>
      </Form>
    </Container>
  );
}
