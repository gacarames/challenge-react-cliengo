import React from 'react';

import { Switch, Route, NavLink } from 'react-router-dom';

import UserForm from './views/CreateUser/CreateUser';
import UserList from './views/UserList';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from './redux/store';

import './styles.scss';

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className='app layout'>
          <aside>
            <header>
              {' '}
              <div className='logo' />{' '}
            </header>
            <nav>
              <ul>
                <li>
                  <NavLink to='/' activeClassName='active' exact>
                    User List
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/users' activeClassName='active'>
                    Users
                  </NavLink>
                </li>
              </ul>
            </nav>
          </aside>
          <main>
            <header className='page-title'>
              <h1>Users</h1>
            </header>
            <Switch>
              <Route exact path='/' component={UserList} />
              <Route exact path='/users' component={UserForm} />
            </Switch>
          </main>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default React.memo(App);
