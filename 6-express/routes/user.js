const express = require('express');

const router = express.Router();

//Get 라우터
router.get('/', (req, res)=>{
    res.send('hello user router');
});




module.exports = router;