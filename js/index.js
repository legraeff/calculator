$( ".shameless-selfpromotion").hide();

var calculo = "";

$("button").click(function() {
  var numero = $(this).attr("value");
  if (numero !== "C" && numero !== "=" && numero !== "easter") {
        calculo += numero;
        $(".numeros").val(calculo);
    
  }
  else if(numero === "C") {
      calculo = "";
      $(".numeros").val("");
  }
  else if(numero === "=") {
      var resultado = eval(calculo);
      $(".numeros").val(resultado);
  } 
  else if (numero === "easter") {
      $( ".shameless-selfpromotion").toggle();

  }
});