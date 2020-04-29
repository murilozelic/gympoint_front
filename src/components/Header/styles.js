import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  max-width: 1440px;
  min-width: 1200px;
  margin: 0 auto;

  height: 64px;
  background: #fff;
  padding: 0 40px;
  border: 1px solid #eee;

  nav {
    display: flex;
    align-items: center;
    height: 30px;

    div {
      display: flex;
      align-items: center;

      margin-right: 30px;
      padding-right: 30px;
      border-right: 1px solid #eee;

      img {
        height: 40px;
        margin-right: 12px;
      }

      span {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: bold;
        color: #ee4d64;
        user-select: none;
      }
    }
  }

  > div {
    display: flex;
    height: 36px;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;

    strong {
      color: #666;
      user-select: none;
    }

    button {
      background: transparent;

      border: 0;
      font-size: 14px;
      text-align: right;
      color: #000;

      transition: color 0.3s;

      &:hover {
        color: #ee4d64;
      }
    }
  }
`;

export const StyledLink = styled(NavLink).attrs({
  activeStyle: { color: '#444' },
})`
  background: transparent;
  border: 0;
  font-size: 16px;
  font-weight: bold;
  margin-right: 20px;
  color: #999;

  transition: color 0.4s;

  &:hover {
    color: #444;
  }
`;
