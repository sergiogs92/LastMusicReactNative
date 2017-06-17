import config from '../constants/config'

export default function (request) {

    let params = {
        method: request.method
    }

    return fetch(`${config.API_URL}${request.url}`, params)
        .then(response => {
            if (response.ok) {
                return response.json()
            } else {
                return response.json().then(err => {
                    throw err
                })
            }})
}
