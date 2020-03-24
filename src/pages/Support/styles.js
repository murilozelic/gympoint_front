import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;

  strong {
    padding: 20px 0;
    font-size: 24px;
  }

  ul {
    padding: 20px;
    background: #fff;
    border-radius: 4px;

    > span {
      font-family: 'Roboto', sans-serif;
      font-size: 16px;
      font-weight: bold;
      color: #444;
    }

    li {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 0;
      border-bottom: 1px solid #eee;

      &:last-child {
        border-bottom: 0;
        padding-bottom: 0;
      }

      span {
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        color: #666;
      }

      button {
        background: transparent;
        border: 0;
        color: #4d85ee;
      }
    }
  }
`;
