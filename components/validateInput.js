import validator from 'validator';

const _ = require('lodash');

export function validateInput(data) {
    let errors = {};
    if (validator.isEmpty(data.email)) {
        errors.email = "this email field is required";
    }
    if (validator.isEmpty(data.password)) {
        errors.password = "this password field is required";
    }
    return {
        errors,
        isValid: _.isEmpty(errors)
    }
}