const nomes = ["Karla", "Giulia", "Maria Eduarda", "Marcelo", "Amanda", "Emmily", "Gabriel"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes);