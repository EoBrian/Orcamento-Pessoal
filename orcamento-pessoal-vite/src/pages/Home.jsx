import './Home.css'
import { useState, useEffect } from "react"

import { useForm } from 'react-hook-form'
import { useFetch } from '../hooks/useFetch'

let new_year = new Date().getFullYear()
const mouths = [1,2,3,4,5,6,7,8,9,10,11,12]

const url = "http://localhost:3000/resgistration"


const Home = () => {
  //hook form
  const {register, handleSubmit} = useForm()

  //custom hook - useFetch
  const {httpConfig} = useFetch(url)

  const sendData = async (data)=> {
    httpConfig(data, "POST")
  }


  return (
    <div  className='container'>
      <div>
        <p className="title display-6 text-center m-3">Registro de nova despesa</p>
      </div>

      <main>
        <form onSubmit={handleSubmit(sendData)}>
          
          <div className="fields date">
            <div>
              <select className="form-select" name="year" id="year"
              {...register('year')}>
                <option value="">Ano</option>
                <option value={new_year}>{new_year}</option>
              </select>
            </div>

            <div>            
              <select className="form-select" name="mouth" id="mouth" 
              {...register('mouth')} >
                <option value="">Mês</option>
                {mouths.map((e)=>(
                  <option key={e} value={e}>{e}</option>
                ))}
              </select>          
            </div>
            
            <div>
              <input type="number" name="day" id="day" min={1} max={31} className="form-control" placeholder="dia" {...register('day')}/>
            </div>

            <div>
              <select className="form-select" name="type" id="type"
              {...register('type')}>
                <option value="">Tipo</option>
                <option value="alimentacao">Alimentação</option>
                <option value="educacao">Educação</option>
                <option value="lazer">Lazer</option>
                <option value="saude">Saúde</option>
                <option value="transporte">Transporte</option>
              </select>
            </div>
          </div>         
          

          <div className="fields">
            <div>
              <input className="form-control" type="text" id="description" placeholder="descrição" {...register('description')}/>
            </div>

            <div>
              <input className="form-control" type="number" name="value" id="value" placeholder="valor" {...register('value')} required/>
            </div>

            <div className="add">
              <input type="submit" className="btn btn-primary" value="+" />
            </div>
          </div>

          

        </form>
      </main>
    </div>
  )
}

export default Home