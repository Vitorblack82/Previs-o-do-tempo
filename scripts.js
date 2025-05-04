




const chave = "f7827a1c83aabfe7899c0ac2e5d1020b"






function colocarNaTela(dados) {

    document.querySelector(".text-principal").innerHTML = "Tempo em " + dados.name
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "°C "
    document.querySelector(".tempo").innerHTML = dados.weather[0].description
    document.querySelector(".nuvem").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
    document.querySelector(".tipoDeAr").innerHTML = "Umidade:  " + dados.main.humidity + " %"
    document.querySelector(".minima").innerHTML = "Min." + Math.floor(dados.main.temp_min) + "°"
    document.querySelector(".maxima").innerHTML = "Máx." + Math.floor(dados.main.temp_max) + "°"
console.log(dados)
}

async function BuscarCidade(cidade) {
    const dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        cidade +
        "&appid=" +
        chave +
        "&lang=pt_br" +
        "&units=metric")

        .then(resposta => resposta.json())


    colocarNaTela(dados)

}


function cliqueiNoBotao() {

    const cidade = document.querySelector(".input-city").value



    BuscarCidade(cidade)
}


