const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Assim que saiu da escola você se depara com muita poluição do ar ou poluição atmosférica. Oque vc pensa?",
        alternativas: [
            {
                texto: "NÃO TEMOS OQUE FAZER!",
                afirmacao: "No início ficou com medo de não saber oque fazer para ajudar. "
            },
            {
                texto: "OQUE VAMOS FAZER PARA SOLUCIONAR!",
                afirmacao: "Quis saber como melhorar a poluição."
            }
        ]
    },
    {
        enunciado: "A poluição do ar, chamada também de poluição atmosférica, é ocasionada pela emissão de substâncias que alteram as características naturais da atmosfera, como material particulado presente na poeira e na fumaça, agentes biológicos e gases.Quais as 2 categoria das principais causas da poluição do ar??",
        alternativas: [
            {
                texto: "Naturais;.",
                afirmacao: "embora menos recorrentes do que as causas antrópicas, fenômenos e elementos naturais são também causadores da poluição do ar, como queimadas naturais; erupções vulcânicas, que tendem a liberar grandes quantidades de enxofre na atmosfera; ventos  que carregam poeira,."
            },
            {
                texto: "antrópicas:.",
                afirmacao: "o crescimento das cidades, o aumento da queima de combustíveis fósseis resultante da ampliação da frota de veículos particulares bem como a intensificação da atividade industriale das usinas estão entre as principais causas antrópicas para apoluição atmosférica, aquelas desencadeadas pelas ações dos seres humanos.."
            }
        ]
    },
    {
        enunciado: "Após a exposição de varios fatores da poluição do ar. O que vc vai fazer?",
        alternativas: [
            {
                texto: "ECONOMIZAR ENERGIA.",
                afirmacao: "POIS É UM DOS FATORES DA POLUIÇÃO."
            },
            {
                texto: "QUEIMAR MENOS COMBUSTIVEL.",
                afirmacao: "POIS CAUSA MUITA POLUIÇÃO."
            }
        ]
    },
    {
        enunciado: "Ao final da discussão, você precisou criar UMA MDEDIDA PRA CONTROLAR A QUEIMA DE COMBUSTIVEL. E agora?",
        alternativas: [
            {
                texto: "*substituição de combustíveis fósseis por biocombustíveis e outros combustíveis de origem renovável, que emitem menos gases poluentes  na atmosfera;.",
                afirmacao: "POIS MUITAS PESSOAS NÃO SABEM."
            },
            {
                texto: "*evitar o uso de equipamentos domésticos que emitam gases poluentes e não colocar fogo no lixo, em terrenos ou pastagens;.",
                afirmacao: "dIMINUIA POLUIÇÃO"
            }
        ]
    },
    {
        enunciado: "EM QUAIS CIDADES TEM POLUIÇÃO? ",
        alternativas: [
            {
                texto: "BRASIL.",
                afirmacao: "A poluição do ar está presente no Brasil principalmente nos grandes centros urbanos.."
            },
            {
                texto: "MINAS GERAIS.",
                afirmacao: "Na capital de Minas Gerais, Belo Horizonte, também se registrou umperíodo considerável em que o material particulado contribuiu negativamente para a qualidade do ar.. "
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "No final...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
