const chave = "f7827a1c83aabfe7899c0ac2e5d1020b";

function colocarNaTela(dados) {
    const cidade = dados.name;

    document.querySelector(".text-principal").innerHTML = "Tempo em " + cidade;
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".tempo").innerHTML = dados.weather[0].description;
    document.querySelector(".nuvem").src =
        "https://openweathermap.org/img/wn/" + dados.weather[0].icon + "@2x.png";
    document.querySelector(".tipoDeAr").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector(".minima").innerHTML = "Min. " + Math.floor(dados.main.temp_min) + "°";
    document.querySelector(".maxima").innerHTML = "Máx. " + Math.floor(dados.main.temp_max) + "°";

   /* alterarPlanoDeFundoPorCidade(cidade);*/
}

async function BuscarCidade(cidade) {
    if (!cidade || cidade.trim() === "") return;

    try {
        const resposta = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt_br&units=metric`
        );
        const dados = await resposta.json();

        if (dados.cod === "404") {
            alert("Cidade não encontrada.");
            return;
        }

        colocarNaTela(dados);
    } catch (error) {
        alert("Erro ao buscar dados.");
        console.error(error);
    }
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-city").value;
    BuscarCidade(cidade);
}

document.querySelector(".busca").addEventListener("click", cliqueiNoBotao);

document.querySelector(".input-city").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        cliqueiNoBotao();
    }
});

