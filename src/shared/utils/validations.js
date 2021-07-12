export const VALIDATE_REQUIRED = 'REQUIRED';
export const VALIDATE_EMAIL = 'EMAIL';
export const VALIDATE_PASSWORD = 'PASSWORD';
export const VALIDATE_MIN = 'MIN';
export const VALIDATE_MAX = 'MAX';

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const validate = (value, validityRules) => {
  let valids = {};
  for (let validator in validityRules) {
    switch (validator) {
      case VALIDATE_REQUIRED:
        valids[validator] = value.length > 0;
        break;
      case VALIDATE_EMAIL:
        valids[validator] = emailRegex.test(value);
        break;
      case VALIDATE_MAX:
        valids[validator] = value.length <= (validityRules[validator].params || 16);
        break;
        case VALIDATE_MIN:
        valids[validator] = value.length >= (validityRules[validator].params || 16);
        break;
      default:
        break;
    }
  }

  return valids;
}
