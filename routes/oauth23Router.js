var express = require('express');
var oauth23Router = express.Router();
const PRIVATE_KEY = 'CERINA_PRIVATE_KEY';
const PUBLIC_KEY = 'CERINA_PUBLIC_KEY';
const oauth23Db = require('../db23/oauth23DbManager');
/*************************************************************/

async function login23(req, res, next) {
    console.log(req.body);
    // var user = await oauth23Db.user.findByEmail(req.body.emailId);
    // var userAuth = await oauth23Db.UserAuth.insert({
    //     userId       : user.id,
    //     codeTimestamp: new Date().getTime(),
    //     clientId     : data.clientId,
    //     meta         : {
    //       codeChallenge      : req.data.codeChallenge,
    //       codeChallengeMethod: req.data.codeChallengeMethod,
    //       scope              : req.data.scope,
    //       responseType       : req.data.responseType,
    //     },
    // });
    res.send({info:'login payload received'});
}
async function verify23(req, res, next) {
    
}

/*************************************************************/
async function decodeRefreshToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, PUBLIC_KEY, {algorithm: 'RS256'}, function (err, decoded) {
            if (err) { return reject(new errors.Forbidden()); }
            resolve(decoded);
        })
    })
}
async function refreshAccessToken(userId, data) {
    var refreshCodeInfo = await decodeRefreshToken(data.refreshToken);
    if(refreshCodeInfo) return generateTokens(userId);
    else return Promise.reject('refresh token not valid')
}
async function createAccessToken(userId, body) {
    res.send(generateTokens(user));
}
function generateTokens(user){
    var accessPayload = { id: user.id, ts: tokenTimestamp }
    var accessToken = jwt.sign(accessPayload, PRIVATE_KEY, { expiresIn: 60, algorithm: 'RS256'});
    var refreshPayload = { 
        code : userAuth.id, 
        userId : user.id,
        ts : tokenTimestamp,
        accessToken: accessToken
    }
    var refreshToken = jwt.sign(refreshPayload, PRIVATE_KEY, {expiresIn: 60, algorithm: 'RS256'});
    return { accessToken : accessToken, refreshToken : refreshToken };
}
async function token23(req, res, next) {
    res.send({ info: 'token Info received'});
    if (req.body.grantType === 'refresh_token') {
        return refreshAccessToken(req.body.userId, req.body);
    } else {
        return createAccessToken(req.body.userId, req.body);
    }
}

/*************************************************************/
// authRouter.post('/createUser', )
oauth23Router.post('/login', login23);
oauth23Router.post('/token/verify', verify23);
oauth23Router.post('/token', token23);
/*************************************************************/
module.exports = oauth23Router;