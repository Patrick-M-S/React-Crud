import React, { useState, useEffect } from 'react'

function EditFuncionarioForm(props) {
  const [funcionario, setFuncionario] = useState(props.currentFuncionario)

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFuncionario({ ...funcionario, [name]: value })
  }

  useEffect(() => { setFuncionario(props.currentFuncionario) }, [props])

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        props.updateFuncionario(funcionario.id, funcionario)
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
      <button>Update funcionario</button>
      <button
        onClick={() => props.setEditing(false)}
        className="button muted-button"
      >
        Cancel
      </button>
    </form>
  )
}

export default EditFuncionarioForm