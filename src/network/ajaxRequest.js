import axios from 'axios'
const baseURL='http://192.168.13.45:9002/'
export default function request(config) {
    const instance = axios.create({
        timeout: 5000,
        headers: { 'content-type': 'application/json' },
        baseURL:baseURL
    })
    return instance(config)
}