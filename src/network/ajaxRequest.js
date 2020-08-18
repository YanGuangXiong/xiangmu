import axios from 'axios'
const baseURL='http://localhost:56831/'
export default function request(config) {
    const instance = axios.create({
        timeout: 5000,
        headers: { 'content-type': 'application/json' },
        baseURL:baseURL
    })
    return instance(config)
}