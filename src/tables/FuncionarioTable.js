import React from 'react'

function FuncionarioTable(props) {

    return (
        <table>
            <thead>
                <tr>
                    <th>Matricula</th>
                    <th>Nome</th>
                    <th>Departamento</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {props.funcionarios.length > 0 ? (
                    props.funcionarios.map((funcionario) => (
                        <tr key={funcionario.id}>
                            <td>{funcionario.matricula}</td>
                            <td>{funcionario.nome}</td>
                            <td>{funcionario.departamento}</td>
                            <td>
                                <button onClick={() => {props.editRow(funcionario)}} className="button muted-button">Edit</button>
                                <button onClick={() => props.deleteFuncionario(funcionario.id)} className="button muted-button">Delete</button>
                            </td>
                        </tr>
                    ))
                ) : (
                    <tr>
                        <td colSpan={3}>No funcionarios</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default FuncionarioTable;