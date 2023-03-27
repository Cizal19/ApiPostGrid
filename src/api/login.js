import API from './Api/index'
import axios from 'axios'

export const loginAuth = async (body) => {
  try{
    const res = await axios.post('https://reqres.in/api/login', body, {headers:{"Content-Type": "application/json"}})
    return res
  }
  catch(err){
    return err
  }
}