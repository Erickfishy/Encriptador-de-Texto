// Obtenemos los elementos del DOM que vamos a utilizar
const inputText = document.getElementById('inputText');
const encryptButton = document.querySelector('.button__Encrypt');
const decryptButton = document.querySelector('.button__Decrypt');
const showText = document.querySelector('.show__Text');
const copyButton = document.querySelector('.button__Copy');

// Función para encriptar el texto
function encryptText() {
  let text = inputText.value;
  text = text.replaceAll('e', 'enter');
  text = text.replaceAll('i', 'imes');
  text = text.replaceAll('a', 'ai');
  text = text.replaceAll('o', 'ober');
  text = text.replaceAll('u', 'ufat');
  const encryptedText = document.createElement('p');
  encryptedText.textContent = text;
  showText.appendChild(encryptedText);
}

// Función para desencriptar el texto
function decryptText() {
  let text = showText.lastElementChild.textContent;
  text = text.replaceAll('enter', 'e');
  text = text.replaceAll('imes', 'i');
  text = text.replaceAll('ai', 'a');
  text = text.replaceAll('ober', 'o');
  text = text.replaceAll('ufat', 'u');
  const decryptedText = document.createElement('p');
  decryptedText.textContent = text;
  showText.appendChild(decryptedText);
}

// Función para copiar el texto encriptado
function copyText() {
  const encryptedText = showText.lastElementChild.textContent;
  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = encryptedText;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  document.execCommand('copy');
  document.body.removeChild(tempTextArea);
}

// Agregamos los event listeners a los botones
encryptButton.addEventListener('click', encryptText);
decryptButton.addEventListener('click', decryptText);
copyButton.addEventListener('click', copyText);
