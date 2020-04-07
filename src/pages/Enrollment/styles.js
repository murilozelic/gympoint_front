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

    thead {
      th {
        font-size: 16px;
        text-align: center;
        color: #666666;

        &:first-child {
          text-align: left;
        }
      }
    }

    tbody {
      tr td {
        padding: 10px 40px;

        button {
          padding-left: 10px;
          background: transparent;
          border: 0;
        }

        &:first-child {
          text-align: left;
          padding-left: 0;
        }
      }

      tr {
        &:last-child td {
          border-bottom: none;
          padding-bottom: 0;
        }
      }

      tr td {
        text-align: left;
        font-size: 16px;
        color: #666666;
        border-bottom: 1px solid #eee;
      }
    }
  }
`;
