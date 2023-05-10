const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();
const controller = require("./controllers")

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/dogs', (req, res) => {

});

router.get('/dogs/:idRaza', (req, res) => {

});

router.post('/dogs/name?="..."', (req, res) => {

});

router.get('/dogs', (req, res) => {

});

router.get('/temperaments', (req, res) => {

});



module.exports = router;
