export const TYPE_REQUIRE = 'REQUIRE';
export const VALIDATE_REQUIRE = () => TYPE_REQUIRE;

export const validate = (value, validators) => {
  for (let validator of validators) {
    switch (validator) {
      case TYPE_REQUIRE:
        return value.length > 0;
      default:
        return true;
    }
  }
}
