const express = require('express');
const router = express.Router();

router.get('/empresa', (req, res) => {
    res.send('servidor funcionando en el metodo get')
})

router.post('/empresa', (req, res) => { 
    res.send('servidor funcionando en el metodo post')
})

router.put('/empresa', (req, res) => {
    res.send('servidor funcionando en el metodo put')
})

router.delete('/empresa', (req, res) => {
    res.send('servidor funcionando en el metodo delete')
})

module.exports = router;