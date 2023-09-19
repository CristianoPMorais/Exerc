
function compararNumeros() {
    
    const numero1 = parseFloat(document.getElementById("numero1").value);
    const numero2 = parseFloat(document.getElementById("numero2").value);

    if (numero2 > numero1){
        alert("Formulário válido! Parabéns, você cumpriu com os requisistos.")
        
    }else {
        alert("Formulário inválido! O segundo número precisa ser maior que o primeiro, tente novamente!")
    }
}




