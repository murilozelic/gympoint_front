import React, { useMemo, useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdDone, MdChevronLeft } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import history from '~/services/history';

import { formatPrice } from '~/util/format';

import { Container, Label } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('É necessário um título'),
  duration: Yup.number().required('Digite uma duração em meses'),
  price: Yup.number()
    .min(0, 'O valor deve ser positivo')
    .typeError('O valor é obrigatório')
    .required('O valor é obrigatório'),
  total_price: Yup.number().required(),
});

export default function GymPlanForm() {
  const { id } = useParams();
  const [plan, setPlan] = useState({});

  // pegar o gymplan do redux
  const gymplans = useSelector(state => state.gymplans.gymplans);

  const total_price = useMemo(() => {
    let total = 0.0;

    if (plan.duration && plan.price) {
      total = parseInt(plan.duration, 10) * parseInt(plan.price, 10);
    }

    return formatPrice(total / 100);
  }, [plan.duration, plan.price]);

  useEffect(() => {
    if (id) {
      // Caso o id tenha sido passado pelo params, procura no redux o gymplan
      const { title, duration, price } = gymplans.filter(
        gp => gp.id === Number(id)
      )[0];

      const gymplan = {
        id,
        title,
        duration,
        price,
        total_price,
      };

      setPlan(gymplan);
    }
  }, []); //eslint-disable-line

  const InitialData = id ? plan : null;

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

      <Form initialData={InitialData} schema={schema}>
        <Label>TÍTULO DO PLANO</Label>
        <Input name="id" type="hidden" />
        <Input
          name="title"
          placeholder="Nome do plano"
          onChange={e => {
            setPlan({ ...plan, title: e.target.value });
          }}
        />
        <div>
          <div>
            <Label>DURAÇÃO (em meses)</Label>
            <Input
              name="duration"
              onChange={e => setPlan({ ...plan, duration: e.target.value })}
            />
          </div>
          <div>
            <Label>PREÇO MENSAL</Label>
            <Input
              name="price"
              onChange={e => setPlan({ ...plan, price: e.target.value })}
            />
          </div>
          <div>
            <Label>PREÇO TOTAL</Label>
            <Input
              name="total_price"
              disabled
              defaultValue={plan.total_price}
            />
          </div>
        </div>
      </Form>
    </Container>
  );
}
