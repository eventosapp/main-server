class Validate {
  options = {
    trycatch: true,
  };
  params = [];

  isValid() {
    let isValid = true;
    this.params.forEach((param) => {
      param.validations.forEach((validation) => {
        if (validation === "NOT_NULL") {
          if (!notNull(param.value)) {
            isValid = false;
            if (this.options.trycatch) {
              throw new Error(`El parametro '${param.name}' es invalido`);
            }
          }
        }
      });
    });
    return isValid;
  }
}

function notNull(value) {
  return value !== null && value !== undefined && value !== "";
}

module.exports = { Validate };
