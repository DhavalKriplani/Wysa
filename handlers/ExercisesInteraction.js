const express = require('express');
const router = express.Router();
const ExercisesInteraction = require('../Controllers/ExercisesInteraction');
const validators = require('../helpers/validators');

router.post('/', async(req, res) => {
    const body = req.body;
    console.log(body);
    const response = await ExercisesInteraction.addExercise(body);
    console.log(typeof(response));
    if(validators.isNonNullObject(response) && "status" in response){
        status = response.code;
        delete response.code;
        res.status(status).send(response);
    }
    else{
        res.send(response);
    }
});

router.get('/', async (req, res)=>{
    const params = req.query;
    console.log(params);
    const response = await ExercisesInteraction.getAllExercises(params);
    if(validators.isNonNullObject(response) && "status" in response){
        status = response.code;
        delete response.code;
        res.status(status).send(response);
    }
    else{
        res.send(response);
    }
});

router.get('/:uniqueId', async (req, res)=>{
    const params = req.params;
    console.log(params);
    const response = await ExercisesInteraction.getExercise(params);
    if(validators.isNonNullObject(response) && "status" in response){
        status = response.code;
        delete response.code;
        res.status(status).send(response);
    }
    else{
        res.send(response);
    }
});

router.post('/:uniqueId', async(req, res) => {
    const params = req.params;
    console.log(params);
    const response = await ExercisesInteraction.updateExerciseViews(params);
    console.log(typeof(response));
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