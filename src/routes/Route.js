import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import AuthLayout from '../pages/_layouts/auth';
import DefaultLayout from '../pages/_layouts/default';

import { store } from '~/store';

// Aqui é criado um wrapper do route que contém todas as props do Route (acessadas através do ...rest)
// e adicionamos a propriedade 'isPrivate' e a passamos em cada rota no index.js que será privada.

export default function RouterWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const { signed } = store.getState().auth;

  // Se usuario não está logado e a tela e privada, redireciona para a tela inicial, ou seja, tela de login.
  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  // Se usuário já está logado e a rota não é privada (aqui a única rota não privada é a de login, logo não faz
  // sentido o usuário já logado acessar uma tela de login), redireciona para a tela inicial da aplicação.
  if (signed && !isPrivate) {
    return <Redirect to="/students" />;
  }

  // Verifica se usuario esta logado e renderiza Layout de acordo
  const Layout = signed ? DefaultLayout : AuthLayout;

  // Retorna o <Route /> com todas as propriedades do Route do react-router-dom (atraves do ...rest),
  // e renderiza o wrapper do Layout (conforme selecao acima) passando as propriedades de render para os componentes.
  return (
    <Route
      {...rest}
      render={props => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouterWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouterWrapper.defaultProps = {
  isPrivate: false,
};
