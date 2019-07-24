import validator from 'validator';
import _ from 'lodash';

export default function validatePassword(data) {
  const errors = {};
  if (validator.isEmpty(data.old_password)) {
    errors.oldPassword = 'this old password field is required';
  }
  if (validator.isEmpty(data.new_password)) {
    errors.newPassword = 'this new password field is required';
  }
  return {
    errors,
    isValid: _.isEmpty(errors),
  };
}
