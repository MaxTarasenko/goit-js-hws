const validationInputById = document.querySelector('#validation-input');
const textValidation = () => {
  let textLength = validationInputById.value.length;
  validationInputById.dataset.length = textLength;
  if (textLength === 0) {
    validationInputById.removeAttribute('class');
  } else if (textLength <= 6) {
    validationInputById.setAttribute('class', 'valid');
  } else {
    validationInputById.setAttribute('class', 'invalid');
  }
};
validationInputById.addEventListener('blur', textValidation);
