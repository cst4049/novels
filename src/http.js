import axios from 'axios'

if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = 'http://localhost:8080'
} else if (process.env.NODE_ENV === 'production') {
  axios.defaults.baseURL = 'http://novel.21cst.cn'
}

console.log(axios.defaults.baseURL)

export default axios
