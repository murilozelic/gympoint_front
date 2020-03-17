import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #ee4d64;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 350px;
  text-align: center;
  background: #fff;
  border-radius: 4px;

  img {
    background: #eee;
    margin: 30px 0 5px;
  }

  h1 {
    color: #ee4d64;
    font-family: 16px 'Roboto';
    font-weight: bold;
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 30px;

    input {
      font-family: 16px 'Roboto';
      border: 1px solid #eee;
      border-radius: 4px;
      height: 34px;
      color: #aaa;
      margin: 0 0 10px;
      padding: 0 10px;

      &::placeholder {
        color: #aaa;
      }
    }

    span {
      color: #444;
      text-align: left;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #ee4d64;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#ee4d64')};
      }
    }
  }
`;
