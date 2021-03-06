import styled from 'styled-components';

export const Container = styled.header`
  background-color: var(--blue);
`

export const Content = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    background-color: var(--blue-light);
    color: #fff;
    padding: 0 2rem;
    border: 0;
    border-radius: 0.25rem;
    height: 3rem;
    transition: 0.2s filter;

    &:hover {
      filter: brightness(0.9)
    }
  }
`