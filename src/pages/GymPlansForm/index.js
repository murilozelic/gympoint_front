import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdDone, MdChevronLeft } from 'react-icons/md';
import history from '~/services/history';

import { Container, Label } from './styles';

export default function GymPlanForm() {
  return (
    <Container>
      <header>
        <strong>Edição de plano</strong>
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
        <Label>TÍTULO DO PLANO</Label>
        <Input name="gymplan" placeholder="Diamond" />
        <div>
          <div>
            <Label>DURAÇÃO (em meses)</Label>
            <Input name="duration" />
          </div>
          <div>
            <Label>PREÇO MENSAL</Label>
            <Input name="price" />
          </div>
          <div>
            <Label>PREÇO TOTAL</Label>
            <Input name="total_price" />
          </div>
        </div>
      </Form>
    </Container>
  );
}
