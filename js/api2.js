const inputCep = document.querySelector("#cep");
const inputRua = document.querySelector("#rua");
const inputComplemento = document.querySelector("#complemento");
const inputBairro = document.querySelector("#bairro");
const inputUF = document.querySelector("#UF");

const BASE_URL = 'https://brasilapi.com.br/api';

// fetch vai ajudar trabalhando com algumas informações e ela vau funcionar como uma promise,
// porque não se sabe quanto tempo o servidor vai demorar para devolver as requisições!
// e pelo fetch vir como uma promise, criamos um função async!
inputCep.onkeyup = async (e) => {
    if(inputCep.value.length < 8) return;
    
    //dentro do fetch eu passo dois parâmetros!
    // 1º -> uma string com meu End point(URL) -> então ficaria BASE_URL+EndPoing+CEP(inputCep.value).
    // 2º -> Um objeto de configurações de como ele deve passar esse primeiro parâmetro.
    //As configurações devemos informar qual o método que eu estou fazendo essas requisições!
    //https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods 
    //As mais importantes são:
    //GET -> Pega informação
    //POST -> Envia informação
    //PUT -> Atualiza uma informação já existente
    //DELETE -> Delata uam informação que foi enviada!
    const resposta = await fetch(`${BASE_URL}/cep/v1/${inputCep.value}`, {
        method: "GET"
    });

    //esse .json() funciona como um promise, então é necessário por o await. O json vai extrair o conteúdo
    //da nossa requisição!
    const conteudoResposta = await resposta.json()
    
    inputRua.value = conteudoResposta.street;
    inputComplemento.value = conteudoResposta.city;
    inputBairro.value = conteudoResposta.neighborhood;
    inputUF.value = conteudoResposta.state;

    alert('Número de do cep ' + inputCep.value);
}