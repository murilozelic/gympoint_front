import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 1400px;
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

        font-family: 'Roboto', sans-serif;
        font-size: 14px;
        font-weight: bold;
        color: #fff;
      }
    }
  }

  > div {
    width: 100%;
    height: 100%;
    background: #fff;
    border: 0;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 30px;

    table {
      width: 100%;
      height: 100%;
      border-collapse: collapse;

      tr td {
        border-bottom: 1px solid #eee;
        padding: 15px 0;
      }

      tr {
        &:last-child td {
          border-bottom: 0;
          padding-bottom: 0;
        }

        td,
        th {
          font-size: 16px;
          text-align: center;
          color: #666666;

          &:first-child {
            text-align: left;
          }
        }
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
