import React, { useState, useEffect } from 'react'
import AddFuncionarioForm from './forms/AddFuncionarioForm';
import FuncionarioTable from "./tables/FuncionarioTable";
import EditFuncionarioForm from './forms/EditFuncionarioForm'

function Funcionarios() {

  const baseUrl = "http://localhost:5083/Funcionario/";

  const [funcionarios, setFuncionarios] = useState([]);

  const [editing, setEditing] = useState(false);

  const initialFormState = { id: null, matricula: 0, nome: '', departamento: '' };

  const [currentFuncionario, setCurrentFuncionario] = useState(initialFormState);

  useEffect(() => {
    getFuncionariosService();
  }, []);

  function addFuncionario(funcionario) {
    addFuncionarioService(funcionario);
  }

  function deleteFuncionario(id) {
    removeFuncionarioService(id);
  }

  function editRow(funcionario) {
    setEditing(true)
    setCurrentFuncionario({
      id: funcionario.id, matricula: funcionario.matricula,
      nome: funcionario.nome, departamento: funcionario.departamento
    })
  }

  function updateFuncionario(id, funcionario) {
    setEditing(false)
    funcionario.id = id;
    updateFuncionarioService(funcionario);
  }

  return (
    <div className="container">
      <h1>Funcionarios</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit funcionario</h2>
              <EditFuncionarioForm
                setEditing={setEditing}
                currentFuncionario={currentFuncionario}
                updateFuncionario={updateFuncionario}
              />
            </div>
          ) : (
            <div>
              <h2>Add funcionario</h2>
              <AddFuncionarioForm addFuncionario={addFuncionario} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View funcionarios</h2>
          <FuncionarioTable funcionarios={funcionarios} deleteFuncionario={deleteFuncionario} editRow={editRow} />
        </div>
      </div>
    </div>
  )

  async function addFuncionarioService(funcionario) {
    fetch(baseUrl, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "POST",
      body: JSON.stringify(funcionario)
    })
      .then(response => {
        getFuncionariosService();
      })
  }

  async function getFuncionariosService() {
    fetch(baseUrl)
      .then(response => response.json())
      .then(data => {
        setFuncionarios(data);
      });
  }

  async function removeFuncionarioService(id) {
    fetch(baseUrl + id, {
      method: "DELETE"
    })
      .then(response => {
        getFuncionariosService();
      })
  }

  async function updateFuncionarioService(funcionario) {
    fetch(baseUrl + funcionario.id, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: "PUT",
      body: JSON.stringify(funcionario)
    })
      .then(response => {
        setCurrentFuncionario(funcionario);
        getFuncionariosService()
      })
  }
}

export default Funcionarios;
