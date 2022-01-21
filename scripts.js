function decimalToBinary(inDecimal) {
    let resto;
    let binario =[];
    while (inDecimal>0) {
        resto = inDecimal % 2;
        binario.push(resto)
        inDecimal =Math.floor(inDecimal/2) ;
    }
    binario.reverse();
    const answer = binario.join('');
    return answer;
    
}


function converterNumberToArray(number) {
     const numberToString = String(number);
     const pullApart = numberToString.split(""); 
     const arrayInt = pullApart.map(function (x) {
        return parseInt(x) ;
     })
     return arrayInt
 }

 function binaryVerification(number) {
     var test = number.find(element => element > 1);
     let answer;
     if (test == undefined) {
        answer = number;
     }else{
        answer = 'i';
     }
     return answer ;
}



function binaryToDecimal(binary) {
    const binarioUsuario = converterNumberToArray(binary);
    const binaryTest = binaryVerification(binarioUsuario);
    let result;
    if (binaryTest == 'i') {
        result = 'Debes inserta un numero decimal';
    }else{
        const binaryTurn = binaryTest.reverse();
        let n = [];
        for (let index = 0; index < binaryTurn.length; index++) {
            n.push((binaryTurn[index])*(2**index));
            result = n.reduce((a,b) => a+b);
        }
   
    }
   
    return result;
}
    



//Aqui interactuamos con el html




function converterDecimalToBinary() {
    const inputDecimal = document.getElementById("in-decimal").value; 
    const resultadoBinario =  decimalToBinary(inputDecimal);
    const printBinary = document.getElementById("binary-answer")
    printBinary.innerText = resultadoBinario;
}

function converterBinaryToDecimal() {
    const inputBinary = document.getElementById("in-binary").value; 
    const resultadoDecimal = binaryToDecimal(inputBinary);
    const printDecimal = document.getElementById("decimal-answer");
    printDecimal.innerText=resultadoDecimal;
}







