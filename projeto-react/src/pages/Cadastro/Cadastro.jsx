import { useState } from "react"

export default function index() {
    //estado para armazenar os ddos do formulario
    const [formData, setFormData] = useState({
        nome: "",
        telefone: "",
        email: ""
    })

    //função para atualizar o status ao digitar no formulario
    const handleChange = (e) => {
        //obter o elemento de entrada atual
        const {name, value} = e.target;
        //extrai o valor e o nome do campo de entrada
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value

        }))
    }

    //função para enviar formulario
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("olá")
    } 

    return (
    <main className='container'>
      <h1>Cadastro de usuarios</h1>
      <form onSubmit={handleSubmit}>
        <article className="form-control">
            <label htmlFor="nome">Nome</label>
            <input 
                type="text" 
                name="nome" 
                value={formData.nome}
                onChange={handleChange}
            />
        </article>
        
        <article className="form-control">
            <label htmlFor="telefone">Telefone</label>
            <input 
                type="text"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
            />
        </article>

        <article className="form-control">
            <label htmlFor="email">Email</label>
            <input
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
            />
        </article>

        <button type="submit">Cadastrar</button>
      </form>
    </main>
  )
}
