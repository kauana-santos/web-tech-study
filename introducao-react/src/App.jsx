
import './App.css'
import StrangerThings from './components/StrangerThings/StrangerThings'
// import Banner from './components/Banner'
// import Card from './components/Card'
// import Footer from './components/Footer'
// import Header from './components/Header'
// import ImgCard from './components/ImgCard/ImgCard'

function App() {

  return (
    <>

      <StrangerThings temporada = "Temporada 4, episodio 5" descricao = "Um grupo de amigos enfrenta acontecimentos sobrenaturais em Hawkins.">

        <div className='btn-div'><button className='btn'><a href="https://www.netflix.com/br/title/80057281?utm_source=chatgpt.com" target="_blank">Assistir ao episódio</a></button></div>
      </StrangerThings>


      {/* <Header titulo = "Utilizando props"/>
      <ImgCard caption = "texto"/>

      <Banner>
        <h1>Bem vindo</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, tempora. Corporis odit dolorum autem officia cumque est eius beatae eligendi esse ad repellat repellendus non, facilis nostrum aliquam deserunt maxime!</p>
      </Banner>

      <Card/>
      <Footer titulo = "atividade footer"/> */}
      
    </>
  )
}

export default App
