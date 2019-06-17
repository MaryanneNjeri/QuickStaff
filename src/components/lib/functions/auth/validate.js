import validator from 'validator';

const _ = require('lodash');

export default function validate(data) {
  const errors = {};
  if (validator.isEmpty(data.email)) {
    errors.email = 'this email field is required';
  }
  if (validator.isEmpty(data.password)) {
    errors.password = 'this password field is required';
  }
  return {
    errors,
    isValid: _.isEmpty(errors),
  };
}

export function validatePassword(password) {
  const errors = {};
  if (validator.isEmpty(password.oldPassword)) {
    errors.oldPassword = 'the current password field is required';
  }
  if (validator.isEmpty(password.newPassword)) {
    errors.newPassword = 'the new password field is required';
  }
  return {
    errors,
    isValid: _.isEmpty(errors),
  };
}
