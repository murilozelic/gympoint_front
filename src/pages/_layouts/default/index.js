import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';

import { Wrapper } from './styles';

// Criacao de um wrapper de layout que podera mudar de acordo com uma condicao
// No caso desta aplicacao, mudara caso o usuario esteja autenticado ou nao

// A propriedade children recebe todos os elementos de dentro do elemento filho
// e renderiza dentro do wrapper conforme esquema abaixo.

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
