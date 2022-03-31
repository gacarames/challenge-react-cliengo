import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import User from './User';

const data = {
  name: 'Juan',
  email: 'arg@gmail.com',
  phone: '+543242343',
  country: 'AR'
};

const onDeleteMock = jest.fn();

const onEditMock = jest.fn();

describe('Render User', () => {
  beforeEach(() =>
    render(<User user={data} onDelete={onDeleteMock} onEdit={onEditMock} />)
  );

  it('Render Name', () => {
    expect(screen.getByText(data.name)).toBeInTheDocument();
  });
  it('Render Email', () => {
    expect(screen.getByText(data.email)).toBeInTheDocument();
  });
  it('Render Phone', () => {
    expect(screen.getByText(data.phone)).toBeInTheDocument();
  });
  it('Render Country', () => {
    expect(screen.getByText(data.country)).toBeInTheDocument();
  });
});
