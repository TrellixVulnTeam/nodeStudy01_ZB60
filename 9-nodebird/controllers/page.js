const express = require('express');

const router = express.Router();

router.use((req,res,next)=>{
    res.locals.user = null;
    res.locals.followerCount = 0;
    res.locals.foloowingCount = 0;
    res.locals.followerIdList = [];
    next();
});

router.get('/profile', (req,res)=>{
    res.render('profile', {title:'내 정보 - NodeBird'});
});

router.get('/join',(res, req)=>{
    res.render('join',{title:'회원가입 - NodeBird'});
});

router.get('/', (res,req,next)=>{
    console.log("here!!!!!!");
    const twits = [];
    res.render('main',{
        title:'NodeBird',
        twits,
    });
    next();
});




module.exports = router;