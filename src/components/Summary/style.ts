import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    background-color: var(--white);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--gray);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    strong {
      display: block;
      font-size: 2rem;
      margin-top: 1rem;
      font-weight: 500;
    }

    &.highlight-background {
      background-color: var(--green);
      color: var(--white);
    }

  }


  
`