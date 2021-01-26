const express = require('express');
const router = express.Router();
const SignIn = require('../Controllers/SignIn');
const utils = require('../helpers/utils');
const validators = require('../helpers/validators');

router.get('/', async (req, res)=>{
    let cookies = req.cookies;
    console.log(cookies);

    if(cookies && "token" in cookies){
        let token = cookies.token;
        console.log(token);
        if(token != null){
            try{
                const tokenVerification = utils.verifyAccessToken(token);
                if(tokenVerification){
                    console.log(tokenVerification);
                    res.redirect("/profilePage?nickname=" + tokenVerification.un + "&uniqueId=" + tokenVerification.id)
                }
            } catch(err) {
                console.log("An err occurred: ", err)
            }
        }
    }

    const params = req.params;
    console.log(params);
    const response = await SignIn.loadTemplate(params);
    if(validators.isNonNullObject(response) && "render" in response){
        let templateParams = {};
        if("params" in response)
            templateParams = response.params;
        res.render(response.render, templateParams)
    }
    else if(validators.isNonNullObject(response) && "redirect" in response){
        res.redirect(response.redirect)
    }
    else if(validators.isNonNullObject(response) && "status" in response){
        status = response.code;
        delete response.code;
        res.status(status).send(response);
    }
    else {
        res.send(response);
    }

});

router.post('/', async (req, res)=>{
    const body = req.body;
    console.log(body);
    const response = await SignIn.formSubmit(body);

    if("cookie" in response){
        res.cookie("token", response.cookie);
        console.log("Cookie set!");
    }

    if(validators.isNonNullObject(response) && "render" in response){
        let templateParams = {};
        if("params" in response)
            templateParams = response.params;
        res.render(response.render, templateParams)
    }
    else if(validators.isNonNullObject(response) && "redirect" in response){
        let redirect = response.redirect;
        if("params" in response){
            const params = response.params;
            redirect += "?";
            Object.keys(params).forEach(function(key) {
                const val = params[key];
                redirect += key + "=" + val + "&"
            });
        }
        res.redirect(redirect)
    }
    else if(validators.isNonNullObject(response) && "status" in response){
        status = response.code;
        delete response.code;
        res.status(status).send(response);
    }
    else {
        res.send(response);
    }
});

module.exports = router;