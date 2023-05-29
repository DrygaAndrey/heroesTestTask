const express = require('express');
const router = express.Router();
const Hero = require('../models/hero');

router.post('/heroAdd', (req, res) => {
  const { nickname, realName, originDescr, superPowers, catchPhrases, imageFiles } = req.body;

  const newHero = new Hero({
    nickname,
    realName,
    originDescr,
    superPowers,
    catchPhrases,
    imageFiles
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

// Получение всех записей
router.get('/getHeroes', async (req, res) => {
  try {
    const heroes = await Hero.find(); 
    res.json(heroes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

module.exports = router;
