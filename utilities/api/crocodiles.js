import http from 'k6/http'
import { conf } from '../../conf.js'

export function getCrocodiles() {
    return http.get(`${conf.baseUrl}/public/crocodiles/`)

}