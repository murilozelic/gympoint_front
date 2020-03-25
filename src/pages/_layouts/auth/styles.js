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
  background: #fff;
  border-radius: 4px;
  text-align: center;

  img {
    background: #eee;
    margin: 30px 0 5px;
  }

  h1 {
    font-size: 30px;
    font-weight: bold;
    color: #ee4d64;
  }

  form {
    display: flex;
    flex-direction: column;
    padding: 30px;

    strong {
      text-align: left;
      font-weight: bold;
      margin-bottom: 10px;
      color: #444;
    }

    span {
      align-self: flex-start;
      color: #ee4d64;
      margin-bottom: 10px;
      font-weight: bold;
    }

    input {
      height: 34px;
      padding: 0 10px;
      border: 1px solid #ddd;
      border-radius: 4px;
      margin-bottom: 10px;
      font-size: 16px;
      color: #999;

      &::placeholder {
        color: #aaa;
      }

      &:focus {
        border: 1px solid #999;
      }
    }

    button {
      height: 44px;
      margin: 5px 0 0;
      padding: 15px 20px;
      font-weight: bold;
      font-size: 16px;
      color: #fff;
      background: #ee4d64;
      border: 0;
      border-radius: 4px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.05, '#ee4d64')};
      }
    }
  }
`;
