export const VALIDATE_REQUIRED = 'REQUIRED';
export const VALIDATE_EMAIL = 'EMAIL';
export const VALIDATE_PASSWORD = 'PASSWORD';
export const VALIDATE_MAX = 'MAX';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validate = (value, validators, params={}) => {
  let valids = {};
  for (let validator in validators) {
    switch (validator) {
      case VALIDATE_REQUIRED:
        valids[VALIDATE_REQUIRED] = value.length > 0;
        break;
      case VALIDATE_EMAIL:
        valids[VALIDATE_EMAIL] = emailRegex.test(value);
        break;
      case VALIDATE_MAX:
        valids[VALIDATE_MAX] = value.length < (params.maxLength || 16);
        break;
      default:
        break;
    }
  }

  return valids;
}
