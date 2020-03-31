import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 25px auto;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 32px;

    strong {
      font-size: 24px;
      font-weight: bold;
      color: #444;
      user-select: none;
    }

    div {
      display: flex;
      height: 100%;

      button {
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 10px;
        border: 0;

        border-radius: 4px;
        margin-left: 20px;

        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: bold;
        color: #fff;
        svg {
          margin-right: 5px;
        }
      }

      .backBtn {
        background: #ccc;
      }

      .saveBtn {
        background: #ee4d64;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background: #fff;
    margin-top: 20px;
    padding: 10px 30px 30px;
    border-radius: 4px;

    input {
      border-radius: 4px;
      border: 1px solid #eee;
      padding: 10px;

      &::placeholder {
        color: #999;
      }
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;

      & div {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        flex: 1;
        padding-right: 20px;

        &:last-child {
          padding-right: 0;
        }

        input {
          width: 100%;
        }
      }
    }

    span {
      color: #f00;
      padding-left: 5px;
      margin-top: 5px;
      &:before {
        content: '- ';
      }
    }
  }
`;

export const Label = styled.label`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: bold;
  color: #444;
  margin: 20px 0 10px;

  width: 100%;
`;
