import React, { useState, useMemo, useEffect } from 'react';
import { Form } from '@rocketseat/unform';
import { MdDone, MdChevronLeft } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { format, addMonths } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { debounce } from 'lodash';

import api from '~/services/api';

import SelectAsync from '~/components/SelectAsync';

import history from '~/services/history';
import { formatPrice } from '~/util/format';

import {
  createEnrollmentRequest,
  editEnrollmentRequest,
} from '~/store/modules/enrollment/actions';

import {
  Container,
  Label,
  FormDatePicker,
  FormBody,
  FormInput,
} from './styles';

/*
Pendencias:
- Adicionar debounce nos inputs para nao requisitar do backend a cada letra digitada
*/

const schema = Yup.object().shape({
  student_id: Yup.number()
    .required('É necessário relacionar um aluno para criar uma matrícula')
    .typeError('É necessário relacionar um aluno para criar uma matrícula'),
  plan_id: Yup.number()
    .required('É necessário relacionar um plano para criar uma matrícula')
    .typeError('É necessário relacionar um plano para criar uma matrícula'),
  start_date: Yup.date()
    .required('É necessário a data de início para criar uma matrícula')
    .typeError('É necessário a data de início para criar uma matrícula'),
});

export default function EnrollmentForm() {
  const { id } = useParams();
  const [plans, setPlans] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [initDate, setInitDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [finalPrice, setFinalPrice] = useState(0);

  const dispatch = useDispatch();

  /*
  Caso o usuário escreva alguma coisa, terá um valor dentro de input,
  com isso, ele vai buscar todos os gymplans no servidor. Caso contrário,
  ele retorna somente os 5 primeiros planos.

  No filtro, a mesma lógica acontece. Se existe conteúdo digitado, irá
  filtrar os resultados
  */

  const loadPlans = value =>
    new Promise(resolve => {
      (async () => {
        const response = value
          ? await api.get(`gymplans`)
          : await api.get(`gymplans`, {
              params: { page: 1, resultsPerPage: 5 },
            });

        const loadedPlans = response.data.status ? [] : response.data.plans;

        const filteredPlans = value
          ? loadedPlans.filter(p =>
              p.title.toLowerCase().includes(value.toLowerCase())
            )
          : loadedPlans;

        setPlans(filteredPlans);

        resolve(filteredPlans);
      })();
    });

  useMemo(() => {
    // ISO 8601 Extended format
    // `YYYY-MM-DDTHH:mm:ss:sssZ`

    if (initDate && selectedPlan) {
      const end = addMonths(initDate, selectedPlan.duration);

      setEndDate(
        format(end, 'dd/MM/yyyy', {
          locale: pt,
        })
      );

      const formattedPrice = selectedPlan.duration * selectedPlan.price;

      setFinalPrice(formattedPrice);
    } else {
      setEndDate('');
      setFinalPrice(0);
    }
  }, [initDate, selectedPlan]);

  async function handleFormSubmit(data) {
    // Formatar data para igualar ao backend
    const parsedDate = format(data.start_date, "yyyy-MM-dd'T'HH:mm:ssxxx");

    // passar o id do enrollment, se tiver
    const formattedData = { ...data, start_date: parsedDate, id };

    // Neste momento, formattedData = { student_id, plan_id, start_date, id }

    try {
      await schema.validate(formattedData, {
        abortEarly: false,
      });
      if (id) {
        dispatch(editEnrollmentRequest(formattedData));
      } else {
        dispatch(createEnrollmentRequest(formattedData));
      }
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        // Validation failed
        console.log(err); // eslint-disable-line
      }
    }
  }

  useEffect(() => {
    async function loadEnrollment() {
      if (id) {
        const response = await api.get('enrollments', { params: { id } });

        const enrollment = response.data;

        setSelectedStudent(enrollment.Student);
        setSelectedPlan(enrollment.GymPlan);
        setInitDate(new Date(enrollment.start_date));
      }
    }

    loadEnrollment();
  }, [id]);

  async function loadStudents(student) {
    const response = await api.get(`students`, {
      params: { student },
    });

    const loadedStudents = response.data.status ? [] : response.data;

    return loadedStudents;
  }

  // Nao funcionou com promise! Necessario usar o callback mesmo
  /* const loadOptionsPromise = student => {
    return new Promise(resolve =>
      loadStudents(student).then(results => resolve(results))
    );
  }; */

  const loadOptions = (inputValue, callback) => {
    loadStudents(inputValue).then(results => callback(results));
  };

  const debouncedLoadStudents = debounce(loadOptions, 500, {
    leading: true,
  });

  return (
    <Container>
      <header>
        <strong>{id ? 'Edição de matrícula' : 'Nova matrícula'} </strong>
        <div>
          <button
            type="button"
            className="backBtn"
            onClick={() => history.goBack()}
          >
            <MdChevronLeft size={20} color="#fff" />
            VOLTAR
          </button>
          <button className="saveBtn" type="submit" form="enrollmentForm">
            <MdDone size={20} color="#fff" />
            SALVAR
          </button>
        </div>
      </header>

      <Form
        id="enrollmentForm"
        schema={schema}
        onSubmit={handleFormSubmit}
        onKeyPress={e => {
          /*	Evita de dar submit no form usando a tecla Enter nos inputs */
          if (e.key === 'Enter') e.preventDefault();
        }}
      >
        <Label>ALUNO</Label>
        <SelectAsync
          // onChange atua quando o texto digitado no input é alterado
          // onInputChange só atua quando a entrada selecionada é alterada
          name="student_id"
          isDisabled={id > 0}
          getOptionValue={option => option.id}
          getOptionLabel={option => option.name}
          // loadOptions={inputValue => loadOptions(inputValue)}
          loadOptions={debouncedLoadStudents}
          defaultOptions
          isClearable
          value={selectedStudent}
          onChange={e => setSelectedStudent(e)}
          placeholder="Escolha o aluno..."
          noOptionsMessage={e =>
            `Nenhum aluno encontrado com o nome "${e.inputValue}"`
          }
        />
        <Label>PLANO</Label>
        <SelectAsync
          // onChange atua quando o texto dgitado no input é alterado
          // onInputChange só atua quando a entrada selecionada é alterada
          name="plan_id"
          getOptionValue={option => option.id}
          getOptionLabel={option => option.title}
          loadOptions={loadPlans}
          options={plans}
          defaultOptions
          isClearable
          value={selectedPlan}
          onChange={e => setSelectedPlan(e)}
          placeholder="Escolha o plano..."
          noOptionsMessage={e =>
            `Nenhum plano encontrado com o nome "${e.inputValue}"`
          }
        />
        <FormBody>
          <div>
            <Label>DATA DE INÍCIO</Label>
            <FormDatePicker
              name="start_date"
              selected={initDate}
              dateFormat="dd/MM/yyyy"
              onChange={date => setInitDate(date)}
              locale={pt}
              placeholderText="Escolha a data..."
              todayButton="Hoje"
              disabled={id > 0}
            />
          </div>
          <div>
            <Label>DATA DE TÉRMINO</Label>
            <FormInput disabled value={endDate} />
          </div>
          <div>
            <Label>VALOR FINAL</Label>
            <FormInput
              disabled
              value={formatPrice(finalPrice / 100)}
              // value={formatPrice(finalPrice.price / 100) || 0}
            />
          </div>
        </FormBody>
      </Form>
    </Container>
  );
}
