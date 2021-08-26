
var corBotoes = ["verde", "verm", "amar", "azul"];

var modoJogo = [];
var modoEscolhaUsuario = [];
var comecou = false;
var nivel = 0;

$(document).keypress(function() {
  if (!comecou) {
    $("#titulonivel").text("Nível " + nivel);
    continuar();
    comecou = true;
  }
});

$(".btn").click(function() {

  var corEscolhidaUsuario = $(this).attr("id");
  modoEscolhaUsuario.push(corEscolhidaUsuario);
  tocarSom(corEscolhidaUsuario);
  apertar(corEscolhidaUsuario);
  conferirResposta(modoEscolhaUsuario.length-1);
});

function conferirResposta(currentLevel) {

    if (modoJogo[currentLevel] === modoEscolhaUsuario[currentLevel]) {
      if (modoEscolhaUsuario.length === modoJogo.length){
        setTimeout(function () {
          continuar();
        }, 1000);
      }
    } else {
      tocarSom("errado");
      $("body").addClass("perdeu");
      $("#titulonivel").text("Você perdeu !!  Aperte a barra de espaço para recomeçar 🙂");
      setTimeout(function () {
        $("body").removeClass("perdeu");
      }, 200);

      recomecar();
    }
}

function continuar() {
  modoEscolhaUsuario = [];
  nivel++;
  $("#titulonivel").text("Nível " + nivel);
  var aleatorio = Math.floor(Math.random() * 4);
  var corAleatoria = corBotoes[aleatorio];
  modoJogo.push(corAleatoria);
  $("#" + corAleatoria).fadeIn(100).fadeOut(100).fadeIn(100);
  tocarSom(corAleatoria);
}

function apertar(currentColor) {
  $("#" + currentColor).addClass("apertou");
  setTimeout(function () {
    $("#" + currentColor).removeClass("apertou");
  }, 100);
}

function tocarSom(name) {
  var audio = new Audio("toques/" + name + ".mp3");
  audio.play();
}

function recomecar() {
  nivel = 0;
  modoJogo = [];
  comecou = false;
}
 