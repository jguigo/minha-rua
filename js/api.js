const inputCep = document.querySelector("#cep");
const inputRua = document.querySelector("#rua");
const inputComplemento = document.querySelector("#complemento");
const inputBairro = document.querySelector("#bairro");
const inputUF = document.querySelector("#UF");

const BASE_URL = 'https://brasilapi.com.br/api'

inputCep.onkeyup = async (e) => {
    if(inputCep.value.length < 8) {
        return;
    }
    alert("Cep completo:", inputCep.value);
    
    //fetch vai receber dois parametros, uma string(BASE_URL + ENDPOIND + o que eu quero)
    //O segundo parâmetro vai ser a configuração que é um objeto
    const resposta = await fetch(`${BASE_URL}/cep/v1/${inputCep.value}`,{
        method: 'GET',
    })
    const conteudoResposta = await resposta.json()

    inputRua.value = conteudoResposta.street;
    inputComplemento.value = conteudoResposta.city;
    inputBairro.value = conteudoResposta.neighborhood;
    inputUF.value = conteudoResposta.state;


    console.log(conteudoResposta);

};