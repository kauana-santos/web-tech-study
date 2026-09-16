import "./Faq.css"
import Accordion from "../../components/Accordion"

export default function index() {
  return (
    <section className="container faq">
      <div className="titulo-faq">
        <h2>Perguntas frequentes</h2>
            <p>Confira as principais dúvidas sobre nossos produtos e serviços.</p>
      </div>

      <div className="accordion-container">
        <Accordion
            pergunta="Qual é o maior planeta do Sistema Solar?"
            resposta="Júpiter é o maior planeta do Sistema Solar."
        />
        <Accordion
            pergunta="Qual é a capital do Brasil?"
            resposta="A capital do Brasil é Brasília."
        />
        <Accordion
            pergunta="Quantos continentes existem no mundo?"
            resposta="Considerando o modelo de seis continentes, são seis: África, América, Antártida, Ásia, Europa e Oceania."
        />
        <Accordion
            pergunta="Quem pintou a Mona Lisa?"
            resposta="A Mona Lisa foi pintada por Leonardo da Vinci."
        />
        <Accordion
            pergunta="Qual é o maior oceano do planeta?"
            resposta="O Oceano Pacífico é o maior oceano da Terra."
        />

        <Accordion
            pergunta="Qual é o animal terrestre mais rápido do mundo?"
            resposta="O guepardo é considerado o animal terrestre mais rápido, podendo atingir velocidades superiores a 90 km/h em curtas distâncias."
        />

        <Accordion
            pergunta="Quantos lados tem um hexágono?"
            resposta="Um hexágono possui seis lados."
        />

        <Accordion
            pergunta="Qual é o idioma mais falado no mundo considerando falantes nativos?"
            resposta="O mandarim é o idioma com maior número de falantes nativos."
        />
      </div>

    </section>
  )
}
