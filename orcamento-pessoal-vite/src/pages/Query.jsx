import './Query.css'
import { useState } from "react"  
import { useFetch } from "../hooks/useFetch"

const url = "http://localhost:3000/resgistration"

const Query = () => {

  const {content:data, httpConfig} = useFetch(url)

  const removeContent = (id)=> {
    const url_delete = `${url}/${id}`
    httpConfig(url_delete, "DELETE")
  }

  return (
    <div className='container'>
      <div>
        <p className=" title display-6 text-center m-4">Consulta de despesas</p>
      </div>
      
      <div className="table">     
        <table >
          <thead>
            <tr>
              <th>Data</th>
              <th>Tipo</th>
              <th>Descrição</th>
              <th>Valor</th>
            </tr>
          </thead>

          <tbody>
            {data ? (data.map((e, i)=> (
              <tr key={i}>
                <td>{e.day}/{e.mouth}/{e.year}</td>
                <td>{e.type}</td>
                <td>{e.description}</td>
                <td>R$ {e.value}</td>
                <td>
                  <button onClick={()=>removeContent(e.id)} className="btn btn-danger">x</button>
                </td>
              </tr>
            ))) : (
              <tr>
                <td>00/00/0000</td>
                <td>Not type</td>
                <td>Not Description</td>
                <td>R$ 00,00</td>
                <td></td>
              </tr>
            )}
          </tbody>
        </table>        
      </div>
    </div>
  )
}

export default Query