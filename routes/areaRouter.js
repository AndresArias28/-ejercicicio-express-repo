const express = require('express');
const router = express.Router();

router.get('/area', (req, res) => {
    res.send('servidor funcionando en el metodo get')
})

router.post('/area', (req, res) => {
    res.send('servidor funcionando en el metodo post')
})

router.put('/area', (req, res) => {
    res.send('servidor funcionando en el metodo put')
})

router.delete('/area', (req, res) => {
    res.send('servidor funcionando en el metodo delete')
})

module.exports = router;