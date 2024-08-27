// Funciones de encriptación y desencriptación
function encriptar(texto) {
  const claves = [
    ['e', 'enter'],
    ['i', 'imes'],
    ['a', 'ai'],
    ['o', 'ober'],
    ['u', 'ufat']
  ]
  for (let i = 0; i < claves.length; i++) {
    texto = texto.replaceAll(claves[i][0], claves[i][1])
  }
  return texto
}

function desencriptar(texto) {
  const claves = [
    ['enter', 'e'],
    ['imes', 'i'],
    ['ai', 'a'],
    ['ober', 'o'],
    ['ufat', 'u']
  ]
  for (let i = 0; i < claves.length; i++) {
    texto = texto.replaceAll(claves[i][0], claves[i][1])
  }
  return texto
}

// Seleccionar elementos del DOM
const textarea = document.querySelector('.caja__texto')
const botonEncriptar = document.querySelector('.boton__encriptar')
const botonDesencriptar = document.querySelector('.boton__desencriptar')
const containerMunieco = document.querySelector('.container__munieco')
const containerParrafo = document.querySelector('.container__parrafo__munieco')
const textoResultado = document.querySelector('.texto__result')

// Evento de encriptar
botonEncriptar.addEventListener('click', () => {
  const textoOriginal = textarea.value
  const textoEncriptado = encriptar(textoOriginal)
  textarea.value = textoEncriptado

  // Ocultar los elementos de muñeco y párrafo
  containerMunieco.classList.add('ocultar')
  containerParrafo.classList.add('ocultar')
})

// Evento de desencriptar
botonDesencriptar.addEventListener('click', () => {
  const textoEncriptado = textarea.value
  const textoDesencriptado = desencriptar(textoEncriptado)
  textarea.value = textoDesencriptado

  // Ocultar los elementos de muñeco y párrafo
  containerMunieco.classList.add('ocultar')
  containerParrafo.classList.add('ocultar')
})

// Evento para copiar el texto
document.querySelector('.boton__copiar').addEventListener('click', () => {
  textarea.select()
  document.execCommand('copy')
})
