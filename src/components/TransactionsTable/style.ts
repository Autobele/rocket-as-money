import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 1rem;

    th {
      color: var(--gray-light);
      font-weight: 400;
      text-align: left;
      padding: 1rem 2rem;
      line-height: 1.5rem;
    }

    td {
      background-color: var(--white);
      padding: 1rem 2rem;
      line-height: 1.5rem;
      border-radius: 0.25rem;
      color: var(--gray-light);
      border: 0;

      &:first-child {
        color: var(--gray);
      }

      &.deposit {
        color: var(--green);
      }

      &.withdraw {
        color: var(--red);
      }

    }
  }
`