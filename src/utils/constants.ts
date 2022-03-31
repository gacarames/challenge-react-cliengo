export const REGEX = {
  validationEmail: new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i),
  validationPhone: new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/i)
};

export const MESSAGE_ERRORS = {
  name: { require: 'Campo requerido' },
  email: {
    require: 'Campo requerido',
    format: 'Formato de campo email invalido'
  },
  phone: {
    require: 'Campo requerido',
    format: 'Formato de campo phone invalido'
  },
  country: { require: 'Campo requerido' }
};
