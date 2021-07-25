import { useState, FormEvent, ChangeEvent } from 'react';

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
    <form onSubmit={handleSubmit}>
      <input id="name" type="text" onChange={handleChangeInput} />
      <button type="submit" disabled={name.length === 0}>
        Entrar
      </button>
    </form>
  );
};

export default Form;
