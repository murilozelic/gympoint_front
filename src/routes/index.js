import React from 'react';
import { Switch } from 'react-router-dom';

// Para deixar uma rota privada, é necessário reconfigurar o Route do react-router-dom.
// Para isso, criamos um novo arquivo 'Route.js' na mesma pasta e importamos ele deste arquivo.

import Route from './Route';

import SignIn from '../pages/SignIn';

import Students from '../pages/Students';
import StudentsForm from '../pages/StudentForm';
import GymPlans from '../pages/GymPlans';
import GymPlansForm from '../pages/GymPlanForm';
import Enrollment from '../pages/Enrollment';
import EnrollmentForm from '../pages/EnrollmentForm';

import Support from '../pages/Support';

export default function Routes() {
  return (
    <Switch>
      {/* Rotas sem necessidade de autenticacao */}
      <Route path="/" exact component={SignIn} />

      {/* Rotas que necessitam de autenticacao */}
      <Route path="/students" exact component={Students} isPrivate />
      <Route path="/students/registration" component={StudentsForm} isPrivate />
      <Route path="/students/:id/edit" component={StudentsForm} isPrivate />

      <Route path="/enrollments" exact component={Enrollment} isPrivate />
      <Route path="/enrollments/edit" component={EnrollmentForm} isPrivate />

      <Route path="/gymplans" exact component={GymPlans} isPrivate />
      <Route path="/gymplans/registration" component={GymPlansForm} isPrivate />
      <Route path="/gymplans/:id/edit" component={GymPlansForm} isPrivate />

      <Route path="/support" component={Support} isPrivate />
      {/* Caso queira criar a funcionalidade de redirecionar o usuario para uma pagina
      caso ele tente acessar uma rota inexistente, utilizar a sintaxe abaixo:

      <Route path="/" component={() => <h1>404</h1>} />

      */}
    </Switch>
  );
}
