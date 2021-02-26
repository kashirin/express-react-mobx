import {errorResponse, successResponse} from '../helpers/response'

import { readFileSync, writeFileSync } from 'fs'

const dataFile = './profile.log'

export const getProfile = (req, res) => {
    let data = null
    try{
        data = readFileSync(dataFile, "utf8")
    }catch(e){
        console.log('no file', dataFile)
    }

    res.send(successResponse(JSON.parse(data)))
}

export const saveProfile = (req, res) => {
    const profile = req.body;
    if(profile){
        writeFileSync(dataFile, JSON.stringify(profile,null,4));
    }
    res.send(successResponse(true))
}