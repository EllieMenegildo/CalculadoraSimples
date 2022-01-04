var N1 = parseInt (prompt("Digite o primeiro valor:"))
var N2 = parseInt (prompt("Digite o segundo valor:"))



var operacao = prompt("Dizite 1 para fazer uma divisão, 2 para multiplicação, 3 para soma e 4 para subtração")

if ( operacao == 1) {
  var resultado = N1 / N2
  
  document.write("<h2>" + N1 + "/" + N2 + "=" + resultado + "</h2>")
}
else if(operacao == 2){
   var resultado = N1 * N2
  
  document.write("<h2>" + N1 + "x" + N2 + "=" + resultado + "</h2>")
}
else if(operacao == 3){
   var resultado = N1 + N2
  
  document.write("<h2>" + N1 + "+" + N2 + "=" + resultado + "</h2>")
}
else if (operacao == 4){
   var resultado = N1 - N2
  
  document.write("<h2>" + N1 + "-" + N2 + "=" + resultado + "</h2>")
}
else {
  document.write("<h2>opção inválida</h2>")
}