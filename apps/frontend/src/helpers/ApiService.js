const baseUrl='/api'
const baseHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}
const NETWORK_ERR = {code: 'NETWORK_ERR', message: 'Ошибка сети'}

const pause = (ms) => {
    return new Promise((rs,rj) => setTimeout(()=>rs(),ms))
}

const callUrl = (params) => async () => {
    const {url, method, body} = params;
    try {

        await pause(1200)
        
        const response = await fetch( url, {
            method,
            headers: baseHeaders,
            body: body ? JSON.stringify(body) : null
        } )
        if (response.status != 200) {
            return { error: NETWORK_ERR }
        }
        
        const result = await response.json()
        if ( result && result.error ) {
            return { error:  result.error}
        } else {
            return result.result
        }
        
    } catch(e) {
        return { error: {code: 'UNEXPECTED_ERROR', message: e.message} }
    }
}

export const getProfile = callUrl({
    method: 'GET',
    url: baseUrl+ '/profile'
})

export const saveProfile = (profile) => callUrl({
    method: 'POST',
    url: baseUrl+ '/profile',
    body: profile
})();

export const getMessages = callUrl({
    method: 'GET',
    url: baseUrl+ '/messages'
})

export const addMessage = (msg) => callUrl({
    method: 'POST',
    url: baseUrl+ '/add-message',
    body: msg
})();


