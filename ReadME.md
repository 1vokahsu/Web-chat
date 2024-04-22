# Web-chat

Пользователь заходит на страницу, представляется системе,
далее может пролистывать историю сообщений, отправлять свои сообщения.

## Стек технологий

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB) ![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)


## Структура проекта

```tree
.
├── LICENSE
├── ReadME.md
├── client
│   ├── README.md
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   ├── favicon.ico
│   │   ├── index.html
│   │   ├── logo192.png
│   │   ├── logo512.png
│   │   ├── manifest.json
│   │   └── robots.txt
│   └── src
│       ├── App.js
│       ├── components
│       │   ├── ChatBar.js
│       │   ├── ChatBody.js
│       │   ├── ChatFooter.js
│       │   ├── ChatPage.js
│       │   └── Home.js
│       ├── index.css
│       ├── index.js
│       └── reportWebVitals.js
└── server
    ├── index.js
    ├── package-lock.json
    ├── package.json
    └── request.rest
```

## Использование
1. Склонировать репозиторий
    ```bash
    https://github.com/1vokahsu/Web-chat.git
    ```
3. Создайте БД
    ```sql
    CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    user_name TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE messages (
        id SERIAL PRIMARY KEY,
        user_id INT,
        message TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(id) 
    );
    ```
2. Перейти в папку `server`, установить зависимости, запустить код
    ```bash
    cd sever/
    npm i
    npm start
    ```
3. Открыть новый терминал, перейти в папку `client`, установить зависимости, запустить код
    ```bash
    cd client/
    npm i
    npm start
    ```
4. Открыть в браузере web-чат по адресу `http://localhost:3000` или `http://127.0.0.1:3000`
![img1](img/home.png)
![img2](img/chat.png)
5. Чтобы остановить код, находясь в терминале, нажмите сочетание клавиш `Ctrl+C`



## Бизнес-ценность

- Приложение обеспечивает пользователей средствами для обмена сообщениями в реальном времени, что способствует улучшению коммуникации как в рабочих, так и в личных целях.
- Пользователи могут легко взаимодействовать друг с другом, обмениваясь сообщениями и обсуждая различные темы, что способствует увеличению вовлеченности и активности на платформе.
- Приложение может стать местом для формирования сообщества, где пользователи могут находить единомышленников, обсуждать интересующие темы и делиться опытом.
- Web-чат обеспечивает доступный способ общения для пользователей, позволяя им обмениваться сообщениями в любое время и из любого места.
- Приложение помогает улучшить коммуникацию между пользователями, что особенно актуально в условиях удаленной работы или дистанционного обучения.
- При наличии большого количества активных пользователей, приложение может предоставлять возможности для монетизации через рекламу, платные подписки или другие способы.

## Развитие сервиса
- Реализация дополнительных функций, таких как возможность создания групповых чатов, отправка файлов, реакции на сообщения, интеграция с другими сервисами и т.д.
- Разработка более интуитивного и удобного интерфейса, персонализация, настройка тем оформления и т.д.
- Создание мобильного приложения для расширения аудитории и обеспечения доступности для пользователей на мобильных устройствах.
- Реализация дополнительных мер безопасности, шифрования сообщений, аутентификации и авторизации пользователей, защита от вредоносных атак и утечек данных.
- Внедрение инструментов для сбора и анализа данных о поведении пользователей, активности в чате, уровне вовлеченности и т.д., что поможет оптимизировать работу приложения и улучшить пользовательский опыт.
- Возможность интеграции с различными внешними сервисами, такими как почта, календари, задачники и т.д., для улучшения процессов работы и повышения эффективности.

## License

Этот проект лицензирован по лицензии MIT - подробности смотрите в файле [LICENSE](LICENSE).

## Участники проекта
[![GitHub](https://img.shields.io/badge/-galyeonh-333?style=for-the-badge&logo=GitHub&logoColor=fff)](https://github.com/1vokahsu)
