import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem 1.2rem;
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.8rem 1.2rem;
  margin-top: 1rem;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;
