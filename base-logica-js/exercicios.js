function fatorial (n) {
    if (n <= 1)
        return 1;
    return n * fatorial(n-1);
}
console.log(fatorial(5));

function fatorial_iterativo (n) {
    let result = 1;
    for(let i =0; i<n;i++) {
        if ((n-i) == 1) {
            result = result * 1;
        }
        else {
            result = result * (n-i);
        }
    }
    return result;
}
console.log(fatorial_iterativo(5));

function maior_numero(array) {
    let maior = array[0];
    for(i=0;i< array.length; i++) {
        if(array[i] > maior) {
            maior = array[i];
        }
    }
    return maior;
}

let numbers = [4, 7, 9, 3, 5, 2, 8];

console.log(maior_numero(numbers));

function palindromo(palavra) {
    for (let i = 0; i < palavra.length / 2; i++) {
        if (palavra[i] !== palavra[palavra.length - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(palindromo('arara'));
