import styled from 'styled-components';

export const Form = styled.form`
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1.2rem;
  text-transform: capitalize;
  border-radius: 0.5rem;
  background: rgb(245 246 250);
  border: solid 0.1rem rgb(227 227 228);
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.8rem 1.2rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
  color: rgb(255, 255, 255);
  background: ${({ disabled }) =>
    disabled ? 'rgb(239 131 84 / 56%)' : 'rgb(239 131 84)'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;
