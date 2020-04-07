import React, { useState, useEffect } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdDone, MdChevronLeft } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import history from '~/services/history';

import {
  createGymPlanRequest,
  editGymPlansRequest,
} from '~/store/modules/gymplans/actions';

import { Container, Label } from './styles';

const schema = Yup.object().shape({
  title: Yup.string()
    .required('É necessário um título')
    .min(3, 'Mínimo 3 caracteres'),
  duration: Yup.number()
    .min(0, 'A duração deve ser positiva')
    .typeError('A duração é obrigatória')
    .required('A duração é obrigatória'),
  price: Yup.number()
    .min(0, 'O valor deve ser positivo')
    .typeError('O preço é obrigatório')
    .required('O preço é obrigatório'),
  total_price: Yup.number().required(),
});

export default function GymPlanForm() {
  const { id } = useParams();
  const [plan, setPlan] = useState({});
  const dispatch = useDispatch();

  // pegar o gymplan do redux
  const gymplans = useSelector(state => state.gymplans.plans);

  useEffect(() => {
    if (id) {
      // Caso o id tenha sido passado pelo params, procura no redux o gymplan
      const { title, duration, price, total_price } = gymplans.filter(
        gp => gp.id === Number(id)
      )[0];

      const gymplan = {
        id,
        title,
        duration,
        price: (price / 100).toFixed(2),
        total_price: (total_price / 100).toFixed(2),
      };

      setPlan(gymplan);
    }
  }, []); //eslint-disable-line

  function handlePriceChange(e) {
    const newPrice = e.target.value;

    setPlan({
      ...plan,
      price: newPrice,
      total_price: (e.target.value * plan.duration).toFixed(2),
    });
  }

  function handleDurationChange(e) {
    const newDuration = e.target.value;
    setPlan({
      ...plan,
      duration: newDuration,
      total_price: (e.target.value * plan.price).toFixed(2),
    });
  }

  async function handleFormSubmit(data) {
    try {
      await schema.validate(data, {
        abortEarly: false,
      });

      const formattedGymPlan = {
        ...data,
        total_price: data.total_price * 100,
        price: data.price * 100,
      };

      if (id) {
        dispatch(editGymPlansRequest({ ...formattedGymPlan, id }));
      } else {
        dispatch(createGymPlanRequest(formattedGymPlan));
      }
      // Validation passed
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        // Validation failed
        console.log(err); // eslint-disable-line
      }
    }
  }

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
          <button className="saveBtn" type="submit" form="gymplanForm">
            <MdDone size={20} color="#fff" />
            SALVAR
          </button>
        </div>
      </header>

      <Form
        id="gymplanForm"
        initialData={InitialData}
        schema={schema}
        onSubmit={handleFormSubmit}
        onKeyPress={e => {
          /*	Evita de dar submit no form usando a tecla Enter nos inputs */
          if (e.key === 'Enter') e.preventDefault();
        }}
      >
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
              type="number"
              step="1"
              min="0"
              onChange={e => handleDurationChange(e)}
            />
          </div>
          <div>
            <Label>PREÇO MENSAL</Label>
            <Input
              name="price"
              type="number"
              step="0.01"
              min="0"
              onChange={e => handlePriceChange(e)}
            />
          </div>
          <div>
            <Label>PREÇO TOTAL</Label>
            <Input
              name="total_price"
              type="number"
              disabled
              value={plan.price && plan.duration ? plan.total_price : '0.00'}
            />
          </div>
        </div>
      </Form>
    </Container>
  );
}
