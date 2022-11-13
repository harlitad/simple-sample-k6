import { getCrocodiles } from './utilities/api/crocodiles.js'
import { group, check } from 'k6'

export const options = {
    vus: 10,
    duration: '30s',
};

export default function () {
    group('get crocodiles data', () => {
        const res = getCrocodiles()
        check(res, {
            'is status 200': (r) => r.status === 200
        })
    })
}