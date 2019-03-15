var Calculadora = {
  init : function () {
    this.operandoa = 0;
    this.operandob = 0;
    this.operacion = "";
    this.regexp = new RegExp('^[0-9]+$');
    this.resultado = document.getElementById('display');

  },
  limpiar : function (){
    this.resultado.textContent = "0";
  },
  concatenar : function (texto){
    if(this.resultado.textContent=="0") {
      this.resultado.textContent = texto;
    }else if(this.resultado.textContent.length<8){
      this.resultado.textContent = this.resultado.textContent  + texto;
    }
  },
  resetear : function (){
    this.resultado.textContent = "0";
    this.operandoa = 0;
    this.operandob = 0;
    this.operacion = "";
  },
  resolver : function (){
    res = 0;
    switch(this.operacion){
      case "+":
        res = parseFloat(this.operandoa) + parseFloat(this.operandob);
        break;
      case "-":
          res = parseFloat(this.operandoa) - parseFloat(this.operandob);
          break;
      case "*":
        res = parseFloat(this.operandoa) * parseFloat(this.operandob);
        break;
      case "/":
        res = parseFloat(this.operandoa) / parseFloat(this.operandob);
        break;
    }
    this.resetear();
    this.resultado.textContent = res.toString().substring(0,8);
  },
  efecto : function (boton) {
    var originalW = boton.style.width;
    var originalH = boton.style.height;
    var originalM = boton.style.margin;
    boton.style.width = '63.9px';
    boton.style.height = '56px';
    boton.style.margin = '4px';
    setInterval(function(){
        boton.style.width = originalW;
        boton.style.height = originalH;
        boton.style.margin = originalM;
      }, 100);
  },
  calcular : function(boton, valor){
      aparato.efecto(boton);
      switch (valor) {
        case "+":
          this.operandoa = this.resultado.textContent;
          this.operacion = "+";
          this.limpiar();
          break;
        case "-":
          this.operandoa = this.resultado.textContent;
          this.operacion = "-";
          this.limpiar();
          break;
        case "*":
          this.operandoa = this.resultado.textContent;
          this.operacion = "*";
          this.limpiar();
          break;
        case "/":
          this.operandoa = this.resultado.textContent;
          this.operacion = "/";
          this.limpiar();
          break;
        case "=":
          this.operandob = this.resultado.textContent;
          this.resolver();
          break;
        case ".":
          if(this.resultado.textContent=="0"){
            this.resultado.textContent = this.resultado.textContent  + ".";
          }else if(!this.resultado.textContent.includes(".")){
            this.concatenar(".");
          }
          break;
        case "signo":
          if(this.resultado.textContent!="0"){
            if(this.resultado.textContent.startsWith("-")){
              this.resultado.textContent = this.resultado.textContent.substring(1);
            }else{
              this.resultado.textContent = "-" + this.resultado.textContent;
            }
          }
          break;
        default:
            if(this.regexp.test(valor)==true){
              this.concatenar(valor);
            }
            break;
      }
    }
};

var aparato = Calculadora;
aparato.init();

document.getElementById('on').onclick = function(e){ aparato.resetear();aparato.efecto(this)}
document.getElementById('mas').onclick = function(e){ aparato.calcular(this,"+"); }
document.getElementById('menos').onclick = function(e){ aparato.calcular(this,"-"); }
document.getElementById('dividido').onclick = function(e){ aparato.calcular(this,"/"); }
document.getElementById('por').onclick = function(e){ aparato.calcular(this,"*"); }
document.getElementById('raiz').onclick = function(e){ aparato.calcular(this,"raiz"); }
document.getElementById('sign').onclick = function(e){ aparato.calcular(this,"signo"); }
document.getElementById('punto').onclick = function(e){ aparato.calcular(this,"."); }
document.getElementById('igual').onclick = function(e){ aparato.calcular(this,"="); }
document.getElementById('1').onclick = function(e){ aparato.calcular(this,"1"); }
document.getElementById('2').onclick = function(e){ aparato.calcular(this,"2"); }
document.getElementById('3').onclick = function(e){ aparato.calcular(this,"3"); }
document.getElementById('4').onclick = function(e){ aparato.calcular(this,"4"); }
document.getElementById('5').onclick = function(e){ aparato.calcular(this,"5"); }
document.getElementById('6').onclick = function(e){ aparato.calcular(this,"6"); }
document.getElementById('7').onclick = function(e){ aparato.calcular(this,"7"); }
document.getElementById('8').onclick = function(e){ aparato.calcular(this,"8"); }
document.getElementById('9').onclick = function(e){ aparato.calcular(this,"9"); }
document.getElementById('0').onclick = function(e){ aparato.calcular(this,"0"); }
