import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdDone, MdChevronLeft } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import history from '~/services/history';

import {
  editStudentRequest,
  createStudentRequest,
} from '~/store/modules/student/actions';

import { Container, Label } from './styles';

// Utilizar o mesmo formulario para adicao e edicao de alunos
// verificar se é adição pelo id.
// id = 0 => adição
// id > 0 => edição

export default function StudentForm() {
  const { id } = useParams();

  const schema = Yup.object().shape({
    name: Yup.string().required('É necessário um nome'),
    email: Yup.string()
      .email('Digite um e-mail válido.')
      .required('É necessário um e-mail'),
    age: Yup.number()
      .min(16, 'A idade deve ser maior ou igual a 16 anos')
      .typeError('A idade é obrigatória')
      .required('A idade é obrigatória'),
    weight: Yup.number()
      .required('Número inválido')
      .min(0, 'O peso deve ser maior ou igual a 0')
      .typeError('O peso é obrigatório')
      .required('O peso é obrigatório'),
    height: Yup.number()
      .required('Número inválido')
      .min(0, 'A altura deve ser maior ou igual a 0')
      .typeError('A altura é obrigatória')
      .required('A altura é obrigatória'),
  });

  // Como o student já está no reducer, não é necessário uma chamada de api
  // para editar.
  const student = useSelector(state => state.student.student);

  const dispatch = useDispatch();

  // Verifica se id veio dos params e popula a const student.
  // Faz um filtro no reducer procurando o student pelo id.
  // Como filter retorna um array, basta selecionar o primeiro elemento.
  const initialData = id ? student : null;

  async function handleFormSubmit(data) {
    try {
      await schema.validate(data, {
        abortEarly: false,
      });

      if (id) {
        dispatch(editStudentRequest({ ...data, id }));
      } else {
        dispatch(createStudentRequest(data));
      }
      // Validation passed
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        // Validation failed
        console.log(err); // eslint-disable-line
      }
    }
  }

  return (
    <Container>
      <header>
        <strong>{id ? 'Edição de Aluno' : 'Cadastro de Aluno'}</strong>
        <div>
          <button
            type="button"
            className="backBtn"
            onClick={() => history.goBack()}
          >
            <MdChevronLeft size={20} color="#fff" />
            VOLTAR
          </button>
          <button className="saveBtn" type="submit" form="studentForm">
            <MdDone size={20} color="#fff" />
            SALVAR
          </button>
        </div>
      </header>

      <Form
        id="studentForm"
        initialData={initialData}
        schema={schema}
        onSubmit={handleFormSubmit}
        onKeyPress={e => {
          /*	Evita de dar submit no form usando a tecla Enter nos inputs */
          if (e.key === 'Enter') e.preventDefault();
        }}
      >
        <Input name="id" type="hidden" />
        <Label>NOME COMPLETO</Label>
        <Input name="name" placeholder="Nome Completo" />
        <Label>ENDEREÇO DE E-MAIL</Label>
        <Input name="email" placeholder="exemplo@rocketseat.com" />
        <div>
          <div>
            <Label>IDADE</Label>
            <Input name="age" type="number" step="1" />
          </div>
          <div>
            <Label>PESO (em kg)</Label>
            <Input name="weight" type="number" step="0.1" />
          </div>
          <div>
            <Label>ALTURA</Label>
            <Input name="height" type="number" step="0.01" />
          </div>
        </div>
      </Form>
    </Container>
  );
}
