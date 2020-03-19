import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/images/gympoint.png';

import { Container, StyledLink } from './styles';

export default function Header() {
  return (
    <Container>
      <nav>
        <div>
          <img src={logo} alt="Gympoint logo" />
          <span>GYMPOINT</span>
        </div>
        <StyledLink to="/students">ALUNOS</StyledLink>
        <StyledLink to="/gymplans">PLANOS</StyledLink>
        <StyledLink to="/enrollments">MATRÍCULAS</StyledLink>
        <StyledLink to="/support">PEDIDOS DE AUXÍLIO</StyledLink>
      </nav>

      <div>
        <strong>Diego Fernandes</strong>
        <Link to="/">sair do sistema</Link>
      </div>
    </Container>
  );
}
