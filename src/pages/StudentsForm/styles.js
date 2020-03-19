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
    height: 100%;
    background: #eee;
    margin-top: 20px;

    div {
      display: flex;
      flex-direction: row;
    }

    label {
      display: block;
    }
  }
`;
