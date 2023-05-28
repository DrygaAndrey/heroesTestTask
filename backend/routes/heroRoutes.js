const express = require('express');
const router = express.Router();
const Hero = require('../models/hero');

router.post('/heroAdd', (req, res) => {
    const { name, age } = req.body;

    const newHero = new Hero({ name, age });

    newHero
        .save()
        .then(() => {
            res.status(200).send('hero успешно добавлен в базу данных');
        })
        .catch((error) => {
            console.error(error);
            res.status(500).send('Ошибка при добавлении hero в базу данных');
        });
});

module.exports = router;