import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { MdDone, MdChevronLeft } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as Yup from 'yup';
import history from '~/services/history';

import { Container, Label } from './styles';

// Utilizar o mesmo formulario para adicao e edicao de alunos
// verificar se é adição pelo id.
// id = 0 => adição
// id > 0 => edição

const schema = Yup.object().shape({
  name: Yup.string(),
  email: Yup.string().email(),
  age: Yup.number(),
  weight: Yup.number(),
  height: Yup.number(),
});

export default function StudentForm() {
  const { id } = useParams();
  const dispatch = useDispatch();

  // Como o student já está no reducer, não é necessário uma chamada de api
  // para editar.
  const students = useSelector(state => state.student.students.data);

  // Verifica se id veio dos params e popula a const student.
  // Faz um filtro no reducer procurando o student pelo id.
  // Como filter retorna um array, basta selecionar o primeiro elemento.
  const student = id ? students.filter(s => s.id === Number(id))[0] : null;

  const initialData = student || null;

  function handleFormSubmit() {
    // console.log('a');
  }

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
          <button className="saveBtn" type="submit" form="studentForm">
            <MdDone size={20} color="#fff" />
            SALVAR
          </button>
        </div>
      </header>

      <Form
        id="studentForm"
        schema={schema}
        initialData={initialData}
        onSubmit={handleFormSubmit}
      >
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
