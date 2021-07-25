import { useRef } from 'react';

type SubmitProps = { name: string };
type FormProps = {
  onSubmit: (props: SubmitProps) => void;
};

const Form = ({ onSubmit }: FormProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const value = inputRef.current?.value ?? '';
    onSubmit({ name: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} id="name" type="text" />
      <button type="submit">Entrar</button>
    </form>
  );
};

export default Form;
