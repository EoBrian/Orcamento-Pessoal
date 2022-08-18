import {useState, useEffect} from 'react'
import axios from 'axios'

export const useFetch = (url) => {

  const [callFetch, setCallFetch] = useState(false)

  //method GET
  const [content, setContent] = useState(null)
  const [error, setError] = useState(false)

  useEffect(()=> {
    const getData = async ()=> {
      try{
        await axios.get(url)
          .then(response => setContent(response.data))
      } catch {
        setError(true)
      }
    }
    
    getData()
    
  }, [url, callFetch])

  //method POST
  const [config, setConfig] = useState(null)
  const [method, setMethod] = useState(null)

  /* 
    httpConfig - configure the methods and add the data 

    1 - method POST
    2 - method DELETE

  */
  const httpConfig = (data, method)=> {
    if (method === "POST") {
      setConfig(data)
      setMethod(method)
    } else if (method === "DELETE") {
      const deleteData = async ()=> {
        await axios.delete(data)
        callFetch ? setCallFetch(false): setCallFetch(true)
      }
      deleteData()
    }
  }

  useEffect(()=> {
    const postData = async ()=> {
      if (method === "POST") {
        await axios.post(url, config)
        callFetch ? setCallFetch(false): setCallFetch(true)  
      }
    }
    postData()
  }, [config, method, url])

  return {content, httpConfig, error}
}
