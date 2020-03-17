import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

// Criacao de um wrapper de layout que podera mudar de acordo com uma condicao
// No caso desta aplicacao, mudara caso o usuario esteja autenticado ou nao

// A propriedade children recebe todos os elementos de dentro do elemento filho
// e renderiza dentro do wrapper conforme esquema abaixo.

export default function AuthLayout({ children }) {
  return (
    <Wrapper>
      <Content>{children}</Content>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
