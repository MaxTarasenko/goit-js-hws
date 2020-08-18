const textInput = document.querySelector('#name-input');
const textOutput = document.querySelector('#name-output');
const textEdit = () =>
  textInput.value == ''
    ? (textOutput.textContent = 'незнакомец')
    : (textOutput.textContent = textInput.value);
textInput.addEventListener('keyup', textEdit);
