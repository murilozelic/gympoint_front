import React from 'react';
import { Switch } from 'react-router-dom';

// Para deixar uma rota privada, é necessário reconfigurar o Route do react-router-dom.
// Para isso, criamos um novo arquivo 'Route.js' na mesma pasta e importamos ele deste arquivo.

import Route from './Route';

import SignIn from '../pages/SignIn';

import Students from '../pages/Students';
import GymPlans from '../pages/GymPlans';
import Support from '../pages/Support';
import Enrollment from '../pages/Enrollment';

export default function Routes() {
  return (
    <Switch>
      {/* Rotas sem necessidade de autenticacao */}
      <Route path="/" exact component={SignIn} />

      {/* Rotas que necessitam de autenticacao */}
      <Route path="/students" component={Students} isPrivate />
      <Route path="/enrollments" component={Enrollment} isPrivate />
      <Route path="/gymplans" component={GymPlans} isPrivate />
      <Route path="/support" component={Support} isPrivate />

      {/* Caso queira criar a funcionalidade de redirecionar o usuario para uma pagina
      caso ele tente acessar uma rota inexistente, utilizar a sintaxe abaixo:

      <Route path="/" component={() => <h1>404</h1>} /> 
      
      */}
    </Switch>
  );
}
