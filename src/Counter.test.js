import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

// Test 1: Verifica que el botón "Incrementar" se renderiza correctamente
test('renders increments counter', () => {
  render(<Counter />);
  const linkElement = screen.getByText(/Incrementa/i);
  expect(linkElement).toBeInTheDocument();
});

//  Test 2: Verifica que el contador inicial sea 0
test('renders initial count of 0', () => {
  render(<Counter />);
  const counterElement = screen.getByText(/Contador: 0/i);
  expect(counterElement).toBeInTheDocument();
});

//  Test 3: Verifica que el contador incremente al hacer clic en el botón
test('increments counter when button is clicked', () => {
  render(<Counter />);
  const buttonElement = screen.getByText(/Incrementar/i);
  fireEvent.click(buttonElement);
  const counterElement = screen.getByText(/Contador: 1/i);
  expect(counterElement).toBeInTheDocument();
});

//  Test 4: Verifica que el contador llegue a 5 si el botón es pulsado cinco veces
test('increments counter when button is clicked', () => {
  render(<Counter />);

  const buttonElement = screen.getByText(/Incrementar/i);
  
  for (let i = 0; i < 5; i++) {
    fireEvent.click(buttonElement);
  }

  const counterElement = screen.getByText(/Contador: 5/i);
  expect(counterElement).toBeInTheDocument();
});