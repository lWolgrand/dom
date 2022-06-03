function allSong(idElementoAudio) {

  document.querySelector(idElementoAudio).play();
}
const teclaList = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < teclaList.length) {

  const tecla = teclaList[contador];
  const instrumento = tecla.classList[1];

  // const idAudio = `#som_${instrumento}`;

  console.log(instrumento);

  // tecla.onclick = function () {
  //   allSong('');
  // }
  contador++;
  console.log(contador);
}










