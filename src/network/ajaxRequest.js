import axios from 'axios'
<<<<<<< HEAD
const baseURL='http://127.0.0.1:9002 /'
=======
const baseURL='http://127.0.0.1:9002'
>>>>>>> 23a5a1a9b9bdd44e4787e654415cc704ae1a3d5a
export default function request(config) {
    const instance = axios.create({
        timeout: 5000,
        headers: { 'content-type': 'application/json' },
        baseURL:baseURL
    })
    return instance(config)
}