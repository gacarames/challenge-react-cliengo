const usersMock = jest.fn();

export default usersMock.mockReturnValue({
  name: 'Juan',
  email: 'arg@gmail.com',
  phone: '+543242343',
  country: 'AR'
});
