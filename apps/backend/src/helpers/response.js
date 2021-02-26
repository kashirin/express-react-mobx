export const errorResponse = (message, code) => {
    code = code || '500';
    return JSON.stringify({
        error:{
            code:code,
            message:message
        }
    },null,4);
}

export const successResponse = (data) => {
    return JSON.stringify({
        result:data
    },null,4);
}