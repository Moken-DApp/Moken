// const letras = [4,3,1,0,8];

// const l = ['a', 'e', 'i', 'o', 'u'];

const trocaLetras = (palavra, l, letras) => {
    let palavraNova = [];

    for (let i = 0; i < palavra.length; i++) {
        if(l.includes(palavra[i])) {
            const pos = l.indexOf(palavra[i])
            console.log(pos);
            palavraNova.push(letras[pos]);
        } else {
            palavraNova.push(palavra[i]);
        }
    }

    return palavraNova.join('');

}

const teste1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

const resolve = (alfabeto, pos) => {
    let array = [];

    for (let i = 12; i < alfabeto.length; i++) {
        array.push(alfabeto[i]);
    }

    for (let i = 0; i < 12; i++) {
        array.push(alfabeto[i]);
    }

    console.log(array);
}

const teste = resolve(teste1, 12);

console.log(trocaLetras('teobaldo esta feliz', ['a', 'e', 'i', 'o', 'u'], [4,3,1,0,8]));