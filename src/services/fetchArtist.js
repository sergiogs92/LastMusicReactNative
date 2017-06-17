import service from './serviceHandler'

export default function () {

    let request = {
        url: '/?method=geo.gettopartists&country=spain&api_key=de2a300a7f8ecc93c1ca49390f9aedbe&format=json',
        method: 'GET'
    }

    return service(request)
}
