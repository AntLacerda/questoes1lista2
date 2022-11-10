let botao = document.querySelector("#botao");
let arrayNumeros = [];

const teste = () => {
    let numeros = document.querySelector("#numeros").value;
    let separador = document.querySelector("#separador").value;

    for(let k=0;k<numeros.length;k++){
        if(numeros[k]!=separador){
            arrayNumeros.push(numeros[k]);
        }
    }

    let maiorNumero = maior(arrayNumeros);
    let menorNumero = menor(arrayNumeros);

    console.log(maiorNumero);
    console.log(menorNumero);
}

const maior = (arrayDeNumeros) => {
    let maior = arrayDeNumeros[0];

    for(let k=1;k<arrayDeNumeros.length;k++){
        if(arrayDeNumeros[k]>maior){
            maior = arrayDeNumeros[k];
        }
    }

    return maior;
}

const menor = (arrayDeNumeros) => {
    let menor = arrayDeNumeros[0];
    
    for(let k=1;k<arrayDeNumeros.length;k++){
        if(arrayDeNumeros[k]<menor){
            menor = arrayDeNumeros[k];
        }
    }

    return menor;
}

botao.addEventListener("click", teste);

