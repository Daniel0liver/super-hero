import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from 'pages/Welcome/Form';

describe('<Form />', () => {
  it('should render form', () => {
    const handleSubmit = jest.fn();

    render(<Form onSubmit={handleSubmit} />);

    const inputElement = screen.getByRole('textbox');
    const buttonElement = screen.getByRole('button', { name: /entrar/i });

    expect(inputElement).toBeInTheDocument();
    expect(buttonElement).toBeInTheDocument();
  });

  it('should sumitting values when clicking button', () => {
    const handleSubmit = jest.fn();

    render(<Form onSubmit={handleSubmit} />);

    userEvent.type(screen.getByRole('textbox'), 'Daniel Oliveira');

    expect(screen.getByRole('textbox')).toHaveValue('Daniel Oliveira');

    userEvent.click(screen.getByRole('button', { name: /entrar/i }));

    expect(handleSubmit).toBeCalledTimes(1);
    expect(handleSubmit).toBeCalledWith({
      name: 'Daniel Oliveira',
    });
  });
});
