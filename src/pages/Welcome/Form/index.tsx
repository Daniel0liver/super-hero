import { useState, FormEvent, ChangeEvent } from 'react';
import * as S from './styles';

export type SubmitProps = { name: string };
type FormProps = {
  onSubmit: (props: SubmitProps) => void;
};

const Form = ({ onSubmit }: FormProps) => {
  const [name, setName] = useState('');

  const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit({ name });
  };

  return (
    <S.Form onSubmit={handleSubmit}>
      <S.Input id="name" type="text" onChange={handleChangeInput} />
      <S.Button type="submit" disabled={name.length === 0}>
        Entrar
      </S.Button>
    </S.Form>
  );
};

export default Form;
