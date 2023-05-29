const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const heroRoutes = require('./routes/heroRoutes');

const app = express();
const PORT = 3333;

// Подключение к MongoDB
mongoose.connect('mongodb+srv://user:root@superheroescluster.1hjnt4e.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'error connecting to MongoDB:'));
db.once('open', () => {
  console.log('succesfull connection to MongoDB');
});

app.use(cors());
// Разбор JSON-данных
// Разрешаем обработку данных в формате JSON
app.use(bodyParser.json({ limit: '10mb' }));

// Разрешаем обработку данных в формате URL-кодирования
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));




// Использование маршрутов
app.use('/heroes', heroRoutes);

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
