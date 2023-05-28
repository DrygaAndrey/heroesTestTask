const express = require('express');
const router = express.Router();
const Hero = require('../models/hero');

router.post('/heroAdd', (req, res) => {
  const { name, image } = req.body;

  const newHero = new Hero({
    name: name,
    image: image,
  });

  newHero
    .save()
    .then(() => {
      res.status(200).send('Герой успешно добавлен');
    })
    .catch((error) => {
      console.error(error);
      res.status(500).send('Ошибка при добавлении героя');
    });
});

module.exports = router;