// Инициализируем переменные окружения из файла .env
require('dotenv').config(); 

const express = require('express');
const path = require('path');
const app = express();

// PORT берется из .env. Если там пусто, включится 3000 по умолчанию
const PORT = process.env.PORT || 3000;

// Делаем папку 'public' статической для выдачи фронтенда
app.use(express.static(path.join(__dirname, 'public')));

// Главный маршрут
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`==================================================`);
    console.log(`🚀 Сервер запущен в режиме: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🌍 Доступ по адресу: http://localhost:${PORT}`);
    console.log(`==================================================`);
});
