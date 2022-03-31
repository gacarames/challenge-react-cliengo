import { REGEX, MESSAGE_ERRORS } from "./constants";
const formValidations = {
  nameValidations: {
    required: "El campo nombre es requerido",
  },
  emailValidations: {
    required: "El campo email es requerido",
    pattern: {
      value: REGEX.validationEmail,
      message: MESSAGE_ERRORS.email.format,
    },
  },
  phoneValidations: {
    required: "El campo phone es requerido",
    pattern: {
      value: REGEX.validationPhone,
      message: MESSAGE_ERRORS.phone.format,
    },
  },
  countryValidations: {
    required: "El campo country es requerido",
  },
};

export default formValidations;
