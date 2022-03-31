import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '../../redux/store';
import UserList from './UserList';
describe('Render UserList', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <UserList />
        </PersistGate>
      </Provider>
    );
  });

  it('Render Header Name Table', () => {
    expect(screen.getByText('Name')).toBeInTheDocument();
  });

  it('Render Header Email Table', () => {
    expect(screen.getByText('Email')).toBeInTheDocument();
  });

  it('Render Header Phone Table', () => {
    expect(screen.getByText('Phone')).toBeInTheDocument();
  });

  it('Render Header Country Table', () => {
    expect(screen.getByText('Country')).toBeInTheDocument();
  });

  it('Render Body Name Table', () => {
    expect(screen.getByText('Juan')).toBeInTheDocument();
  });
});
