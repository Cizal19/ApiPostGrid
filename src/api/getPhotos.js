import axios from "axios"

export const getPhotos = async (body) => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/photos', body, {headers:{"Content-Type": "application/json"}})
    return res
  } catch (error) {
    return error
  }
}