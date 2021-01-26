const express = require('express');
const router = express.Router();
const DataPorting = require('../Controllers/DataPorting');
const validators = require('../helpers/validators');

router.get('/generation', async (req, res)=>{
    const params = req.query;
    console.log(params);
    const response = await DataPorting.codeGeneration(params);
    if(validators.isNonNullObject(response) && "status" in response){
        status = response.code;
        delete response.code;
        res.status(status).send(response);
    }
    else{
        res.send(response);
    }
});

router.get('/verification', async (req, res)=>{
    const params = req.query;
    console.log(params);
    const response = await DataPorting.codeVerification(params);
    if(validators.isNonNullObject(response) && "status" in response){
        status = response.code;
        delete response.code;
        res.status(status).send(response);
    }
    else{
        res.send(response);
    }
});

module.exports = router;