import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 1200px;
  min-width: 900px;
  margin: 0 auto;

  header {
    margin: 25px 120px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 24px;
      font-weight: bold;
      color: #444;
      user-select: none;
    }

    div {
      display: flex;
      align-items: center;
      height: 32px;

      a {
        height: 100%;
        display: flex;
        align-items: center;
        padding: 0 15px;
        border: 0;
        background: #ee4d64;
        border-radius: 4px;
        margin-left: 5px;

        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: bold;
        color: #fff;
      }

      > div {
        position: relative;

        svg {
          position: absolute;
          left: 10px;
        }

        input {
          height: 100%;
          width: 250px;
          padding-left: 35px;
          border-radius: 4px;
          border: 1px solid #ccc;

          &::placeholder {
            color: #999;
          }
        }
      }
    }
  }

  table {
    display: block;
    width: 100%;
    height: 100%;
    padding: 20px;
    background: #fff;
    border: 0;
    border-radius: 4px;
    border-collapse: collapse;
    box-sizing: border-box;

    tr td {
      text-align: left;
      font-size: 16px;
      color: #666666;
      padding: 20px 0px;
      border-bottom: 1px solid #eee;
    }

    tr:last-child td {
      border-bottom: none;
      padding-bottom: 0;
    }

    tr th {
      text-align: left;
      font-size: 16px;
      color: #444;
    }

    th,
    td {
      width: 40%;
      max-width: 300px;
      overflow: hidden;

      /* Alinhar itens a partir da terceira coluna do header e dos itens */
      &:nth-child(n + 3) {
        text-align: center;
        min-width: 40%;
        min-width: 100px;
      }
    }
  }

  .editStudentGridBtn {
    background: transparent;
    border: 0;
    color: #4d85ee;
  }

  .deleteStudentGridBtn {
    background: transparent;
    border: 0;
    color: #de3b3b;
  }
`;
