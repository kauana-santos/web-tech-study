
import './App.css'
import Banner from './components/Banner'
import Card from './components/Card'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header titulo = "Utilizando props"/>
      <Banner>
        <h1>Bem vindo</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto, tempora. Corporis odit dolorum autem officia cumque est eius beatae eligendi esse ad repellat repellendus non, facilis nostrum aliquam deserunt maxime!</p>
      </Banner>

      <Card/>
      <Footer titulo = "atividade footer"/>
      
    </>
  )
}

export default App
