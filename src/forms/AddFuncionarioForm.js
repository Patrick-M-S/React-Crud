import React, { useState } from 'react'

function AddFuncionarioForm(props) {

  const initialFormState = { id: null, matricula: 0, nome: '', departamento: '' };
  const [funcionario, setFuncionario] = useState(initialFormState)

  function handleInputChange(event) {
    const { name, value } = event.target
    setFuncionario({ ...funcionario, [name]: value })
  }

  return (
    <form 
      onSubmit={event => {
        event.preventDefault()
        if (!funcionario.name || !funcionario.price) return
    
        props.addFuncionario(funcionario)
        setFuncionario(initialFormState)
      }}
    >
      <label>Matricula</label>
      <input 
        type="number" 
        name="name" 
        value={funcionario.matricula} 
        onChange={handleInputChange}
        />
      <label>Nome</label>
      <input 
        type="text" 
        name="price" 
        value={funcionario.nome} 
        onChange={handleInputChange}
        />
    <label>Departamento</label>
      <input 
        type="text" 
        name="price" 
        value={funcionario.departamento} 
        onChange={handleInputChange}
        />
      <button>Add new funcionario</button>
    </form>
  )
}

export default AddFuncionarioForm