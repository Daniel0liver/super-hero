import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from 'pages/Welcome/Form';

describe('<Form />', () => {
  const handleSubmit = jest.fn();

  it('should render form', () => {
    render(<Form onSubmit={handleSubmit} />);

    const inputElement = screen.getByRole('textbox');
    const buttonElement = screen.getByRole('button', { name: /entrar/i });

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('should sumitting values when clicking button', () => {
    render(<Form onSubmit={handleSubmit} />);

    userEvent.type(screen.getByRole('textbox'), 'Daniel Oliveira');

    expect(screen.getByRole('textbox')).toHaveValue('Daniel Oliveira');

    userEvent.click(screen.getByRole('button', { name: /entrar/i }));

    expect(handleSubmit).toBeCalledTimes(1);
    expect(handleSubmit).toBeCalledWith({
      name: 'Daniel Oliveira',
    });
  });

  it('should disable the submit button when input is empty', () => {
    render(<Form onSubmit={handleSubmit} />);

    const inputElement = screen.getByRole('textbox');
    const buttonElement = screen.getByRole('button', { name: /entrar/i });

    expect(inputElement).toHaveValue('');
    expect(buttonElement).toBeDisabled();
  });

  it('should enable the submit button when input is not empty', () => {
    render(<Form onSubmit={handleSubmit} />);

    const inputElement = screen.getByRole('textbox');
    const buttonElement = screen.getByRole('button', { name: /entrar/i });

    userEvent.type(inputElement, 'Daniel Oliveira');

    expect(inputElement).toHaveValue('Daniel Oliveira');
    expect(buttonElement).toBeEnabled();
  });
});
