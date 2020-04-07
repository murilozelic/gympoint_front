import React, { useState, useEffect } from 'react';
import { Form } from '@rocketseat/unform';
import { MdDone, MdChevronLeft } from 'react-icons/md';
import { useParams } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
import AsyncSelect from 'react-select/async';
import api from '~/services/api';

/* import {
  searchStudentsRequest,
  loadStudentsRequest,
} from '~/store/modules/student/actions'; */

// import * as Yup from 'yup';
import history from '~/services/history';

import {
  Container,
  Label,
  FormDatePicker,
  FormBody,
  FormInput,
} from './styles';

export default function EnrollmentForm() {
  const { id } = useParams();
  // const dispatch = useDispatch();
  const [students, setStudents] = useState([]);
  const [studentSelected, setStudentSelected] = useState(null);

  const loadStudents = async searchStudent => {
    const response = await api.get(`students?student=${searchStudent}`);

    const foundStudents = response.data.status ? null : response.data;

    setStudents(foundStudents);

    return new Promise(resolve => {
      resolve(foundStudents);
    });
  };

  useEffect(() => {
    loadStudents();
  }, []);

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
          <button type="button" className="saveBtn">
            <MdDone size={20} color="#fff" />
            SALVAR
          </button>
        </div>
      </header>

      <Form>
        <Label>ALUNO</Label>
        <AsyncSelect
          loadOptions={loadStudents}
          defaultOptions
          isClearable
          options={students}
          name="searchStudent"
          value={studentSelected}
          onChange={e => setStudentSelected(e)}
          placeholder="Escolha o aluno..."
          noOptionsMessage={() => 'Nenhum aluno encontrado'}
        />

        <Label>PLANO</Label>
        <AsyncSelect name="gymplan" placeholder="Escolha o plano..." />

        <FormBody>
          <div>
            <Label>DATA DE INÍCIO</Label>
            <FormDatePicker name="init_date" />
          </div>
          <div>
            <Label>DATA DE TÉRMINO</Label>
            <FormDatePicker name="end_date" />
          </div>
          <div>
            <Label>VALOR FINAL</Label>
            <FormInput
              name="total_price"
              type="number"
              disabled
              // value={plan.price && plan.duration ? plan.total_price : '0.00'}
            />
          </div>
        </FormBody>
      </Form>
    </Container>
  );
}
