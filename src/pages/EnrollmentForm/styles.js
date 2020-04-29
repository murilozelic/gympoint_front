import styled from 'styled-components';
import DatePicker from '~/components/DatePicker';

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
    background: #fff;
    margin-top: 20px;
    padding: 20px;
    border-radius: 4px;

    input {
      border-radius: 4px;
      border: 1px solid #eee;

      &::placeholder {
        color: #999;
      }
    }
  }
`;

export const Label = styled.label`
  display: block;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  color: #444;
  margin: 10px 0;
`;

export const FormBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const FormDatePicker = styled(DatePicker)`
  font-family: 'Roboto', sans-serif;
  color: #444;
  text-align: center;
  padding: 10px 0;
`;

export const FormInput = styled.input`
  font-family: 'Roboto', sans-serif;
  color: #444;
  text-align: center;
  padding: 10px 0;
`;
