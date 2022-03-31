import reducer, { addUser } from './userSlice';

test('should return the initial state', () => {
  expect(reducer(undefined, {})).toEqual({
    users: [
      {
        name: 'Juan',
        email: 'arg@gmail.com',
        phone: '+543242343',
        country: 'AR'
      }
    ]
  });
});

test('should handle a todo being added to an empty list', () => {
  const previousState = { users: [] };
  expect(
    reducer(
      previousState,
      addUser({
        name: 'User Test',
        email: 'user@test.com',
        phone: '1132732728',
        country: 'AR'
      })
    ).users[0]
  ).toEqual(
    expect.objectContaining({
      name: 'User Test',
      email: 'user@test.com',
      phone: '1132732728',
      country: 'AR'
    })
  );
});
