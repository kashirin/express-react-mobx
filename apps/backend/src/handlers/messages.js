import {errorResponse, successResponse} from '../helpers/response'

import { readFileSync, writeFileSync } from 'fs'

const dataFile = './messages.log'

export const getMessages = (req, res) => {
    let data = '[]';
    try{
        data = readFileSync(dataFile, "utf8")
    }catch(e){
        console.log('no file', dataFile)
    }

    res.send(successResponse(JSON.parse(data)))
}

export const addMessage = (req, res) => {
    let msg = req.body;
    msg.id = ('n'+Math.random()).split('.').join('');
    if(msg){
        let data = []
        try{
            data = readFileSync(dataFile, "utf8")
            data = JSON.parse(data)
        }catch(e){
            console.log('no file', dataFile)
        }
        data.push(msg);
        writeFileSync(dataFile, JSON.stringify(data,null,4));
    }
    res.send(successResponse(true))
}