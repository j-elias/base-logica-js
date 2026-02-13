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
    for(let i=0; i< array.length; i++) {
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


function remove_duplicados(array) {
    let array_resposta = [];
    for(let i = 0; i < array.length; i++)
    {
        if (i == 0) {
            array_resposta.push(array[i]);
        }
        else {
            if (!array_resposta.includes(array[i])) {
                array_resposta.push(array[i]);
            }
        }
    }
    return array_resposta;
}

console.log(remove_duplicados([1, 2, 3, 2, 4, 1, 5]));

function busca_linear(array, valor) {
    for(let i = 0; i < array.length; i++) {
        if (array[i] == valor) {
            return i;
        }
    }
    return -1;
}

console.log(busca_linear([1, 2, 3, 4, 5], 3));

function busca_binaria(array, valor) {
    let inicio = 0;
    let fim = array.length - 1;
    while (inicio <= fim) {
        let meio = Math.floor((inicio + fim) / 2);
        if (array[meio] === valor) {
            return meio;
        }
        else if (array[meio] < valor) {
            inicio = meio + 1;
        }
        else {
            fim = meio - 1;
        }
    }
    return -1;
}
console.log(busca_binaria([1, 2, 3, 4, 5], 3));


class Pilha {
    constructor() {
        this.itens = [];
        this.length = 0;
    }

    push(valor) {
        // adicionar no topo
        this.itens[this.length] = valor;
        this.length++;
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error("Pilha vazia");
        }
        this.length--;
        const valor = this.itens[this.length];
        delete this.itens[this.length]; // limpa referência
        return valor;
    }

    peek() {
        // ver topo sem remover
        if (this.size() > 0) {
            return this.itens[this.length - 1];
        }
        return 'Pilha vazia';
    }

    isEmpty() {
        // retorna true se vazia
        return this.length === 0;
    }

    size() {
        // retorna tamanho
        return this.length; 
    }
}


const p = new Pilha();
p.push(10);
p.push(20);
console.log(p.pop()); // 20
console.log(p.peek()); // 10

class Fila {
    constructor() {
        this.itens = {};
        this.inicio = 0;
        this.fim = 0;
        this.length = 0;
    }

    enqueue(valor) {
        this.itens[this.fim] = valor;
        this.fim++;
        this.length++;
    }

    dequeue() {
        if (this.isEmpty()) {
            throw new Error("Fila vazia");
        }
        let valor = this.itens[this.inicio];
        delete this.itens[this.inicio];
        this.inicio++;
        this.length--;
        return valor;
    }
    peek() {
        if (this.size() > 0) {
            return this.itens[this.inicio];
        }
        return 'Fila vazia';
    }
    isEmpty() {
        return this.length === 0;
    }
    size() {
        return this.length;
    }
}

const f = new Fila();
f.enqueue(10);
f.enqueue(20);
console.log(f.dequeue()); // 10
console.log(f.peek()); // 20