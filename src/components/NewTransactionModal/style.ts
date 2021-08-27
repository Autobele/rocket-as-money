import styled from 'styled-components';
import { darken, transparentize } from 'polished';

export const Container = styled.form`
  h2 {
    color: var(--gray);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;

    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    background-color: #e7e9ee;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--gray)
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"]{
    width: 100%;
    height: 4rem;
    margin-top: 1.5rem;

    border-radius: 0.25rem;
    border: 0;
    background-color: var(--green);

    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    
    filter: brightness 0.2s;

    :hover {
      filter: brightness(0.9);
    }
  }

`


export const TransactionTypeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  margin: 1rem 0rem;
`

interface RadioBoxProps {
  isActive: boolean;
  activeColor: 'green' | 'red';
}

const colors = {
  green: '#33CC95',
  red: '#E62E4D'
}

export const RadioBox = styled.button<RadioBoxProps>`
  background-color: ${(props) => props.isActive 
  ? transparentize(0.9, colors[props.activeColor]) 
  : 'transparent' };

  height: 4rem;
  border-radius: 0.25rem;
  border: 1px solid #d7d7d7;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: border-color 0.2s;

  img {
    width: 28px;
    height: 28px;
  }

  span {
    display: inline-block;
    font-size: 1rem;
    margin-left: 1rem;
    line-height: 2rem;
    color: var(--gray);
  }

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }
`