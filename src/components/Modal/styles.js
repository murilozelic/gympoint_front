import styled from 'styled-components';
import { Input } from '@rocketseat/unform';

export const Container = styled.div`
  display: ${props => (props.modalShow ? 'flex' : 'none')};
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);

  div {
    display: flex;
    flex-direction: column;
    max-width: 460px;
    position: fixed;
    left: 50%;
    top: 40%;
    padding: 30px;
    border: 0;
    border-radius: 4px;
    background: #fff;
    transform: translate(-50%, -50%);

    strong {
      padding: 0;
      font-size: 14px;
      color: #444;
      margin-bottom: 8px;
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;

      button {
        border: 0;
        background: transparent;
      }
    }

    span {
      line-height: 26px;
      color: #666;
      font-size: 16px;
      margin-bottom: 20px;
    }

    > button {
      background: #ee4d64;
      border: 0;
      border-radius: 4px;
      padding: 15px;
      color: #fff;
      font-weight: bold;
      font-size: 16px;
    }
  }
`;

export const TextInput = styled(Input)`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 120px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
  padding: 10px;
  resize: none;

  &::placeholder {
    color: #999;
    font-size: 16px;
  }
`;
