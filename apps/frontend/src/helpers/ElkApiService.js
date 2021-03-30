const baseUrl='/local_entry'
const baseHeaders = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}
const NETWORK_ERR = {code: 'NETWORK_ERR', message: 'Ошибка сети'}

const prettyProfile = (data) => {
    let res = {};
    try{

        if(!(data instanceof Array)){
            data = [data];
        }

        for(let block of data){
            if(block.hasOwnProperty('code') && block.hasOwnProperty('code')){
                if(block.data instanceof Array && block.data.length===1){
                    block.data = block.data[0];
                }
                res[block.code] = block.data;
            }
        }

    }catch(e){
        console.log('Error',e);
    }
    return res;
}


const callUrl = (params) => async () => {
    const {url, method, body, headers, is_profile} = params;
    try {

        //await pause(1200)
        
        const response = await fetch( url, {
            method,
            headers: {...baseHeaders, ...headers},
            body: body ? JSON.stringify(body) : null
        } )
        if (response.status !== 200) {
            return { error: NETWORK_ERR }
        }
        
        const result = await response.json()
        
        if ( result && result.error ) {
            return { error:  result.error}
        } else {
            if(is_profile){
                return prettyProfile(result)
            }else{
                return result
            }
            
        }
        
    } catch(e) {
        return { error: {code: 'UNEXPECTED_ERROR', message: e.message} }
    }
}


export const getProfile = (sso) => callUrl({
    method: 'GET',
    url: baseUrl+ '/?id=me&type=profile&sso='+sso+'&origin=NEW_ELK',
    headers: {
        'iv-user': sso
    },
    is_profile: true
})()

export const saveProfile = (sso, code, data, force) => callUrl({
    method: 'POST',
    url: baseUrl+ '/?id=me&type=profile&sso='+sso+'&origin=NEW_ELK&action=edit&code='+ code + ( (force)?'&force=1':'' ),
    body: {code, data}
})();


