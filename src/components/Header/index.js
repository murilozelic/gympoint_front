import React from 'react';
import { useDispatch } from 'react-redux';
import logo from '~/assets/images/gympoint.png';

import { signOut } from '~/store/modules/auth/actions';

import { Container, StyledLink } from './styles';

export default function Header() {
  const dispatch = useDispatch();

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
        <strong>Administrador</strong>
        <button type="button" onClick={() => dispatch(signOut())}>
          Logout
        </button>
      </div>
    </Container>
  );
}
