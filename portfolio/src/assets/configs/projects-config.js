const projectContent = [{
  englishContent: [
    {
      order: 1,
      link: 'https://github.com/servosdesign/horror-ai',
      imageSrc: '/images/horror-ai.png',
      title: 'Horror.ai',
      description: "Horror.ai is a Vue.js AI-powered application that creates simulated horror movie themed experiences from the use of OpenAI's API, a backend with Express, and custom prompts for each specific horror theme. The user signs up with their own OpenAI API keys and manages their own tokenization.",
      tag: 'VUE.js, OPENAI, Express'
    },

    {
      order: 2,
      link: 'https://github.com/servosdesign/rucream',
      imageSrc: '/images/rucream.png',
      title: 'ruCream',
      description: 'ruCream is a light mode, minimalistic, creamy color theme for vscode applications and is heavily inspired by the Ayu Color Themes. The base template of ruCream is a modification of the Ayu Light Theme\'s color choices while maintaining its key concepts. Designed as a light and airy theme, inspired by the iconic Russian cream dessert color palette, consisting of reds, creams, whites, and the signature glass or white bowl, which gives a sleek, minimalistic, and even delicious feeling when writing.',
      tag: 'THEMES, VSCODE, Ayu'
    },

    {
      order: 3,
      link: 'https://github.com/servosdesign/servos-marketplace',
      imageSrc: '/images/nft-marketplace.png',
      title: 'Servos Marketplace',
      description: "Servos Marketplace is a Ethereum based NFT marketplace application (dApp) made with React, Solidity, Truffle, and web3.js which allows the user to view and / or purchase ERC721 NFTs from among the marketplace items. User log in with their ether wallet address and have access to purchase Solidty / Truffle generated ERC721 NFT s made on the Rinkeby's development network.",
      tag: 'SOLIDITY, TRUFFLE, WEB3.JS, REACT'
    },

    {
      order: 4,
      link: 'https://github.com/servosdesign/minimalistic-questions.vue',
      imageSrc: '/images/minquestions.png',
      title: 'Minimalistic Questions',
      description: 'Minimalistic Questions is a Vue.js eLearning application which modifies an existing question bank by randomizing question data, dynamically choosing the number of questions, allows the user to cycle through questions with a previous and next button, counting a total score for the user based on quiz submission, and enhancing the user experience with a minimalistic ui.',
      tag: 'VUE.js, JAVASCRIPT, eLearning',
      uniqueButton: true,
      uniqueLink: 'https://github.com/servosdesign/minimalistic-questions.js'
    },

    {
      order: 5,
      link: 'https://github.com/servosdesign/moses',
      imageSrc: '/images/moses.png',
      title: 'Moses',
      description: 'Moses is a Unity2D RPG game with top down, pixelized, minimalistic, and choices matter features. The player is guided through the game’s various scenes and is left with their own options in the varying situations',
      tag: 'UNITY, C#, GAME'
    },

    {
      order: 6,
      link: 'https://github.com/servosdesign/servos-coral',
      imageSrc: '/images/servos-coral.png',
      title: 'Servos Coral',
      description: 'Servos Coral is a JavaScript imgur clone application with a stack composed of NodeJS, ExpressJS, SQL, and Handlebars, which allows users to create accounts, posts images, comment on images, and search for images',
      tag: 'JAVASCRIPT, NODE.js, EXPRESS.js, SQL'
    },

    {
      order: 7,
      link: 'https://github.com/servosdesign/portfolio',
      imageSrc: '/images/portfolio.png',
      title: 'Portfolio',
      description: 'Portfolio is a custom created portfolio made and updating periodically with new projects and designs. The portfolio has a minimal look and feel. I wanted majority of information to be availiable within one page. The design is entirely unique to my personal tastes in web design. The repo contains a copy of the original portfolio (HTML/CSS) and the copy of this current design (Vue.js)',
      tag: 'VUE.JS, JAVASCRIPT, HTML/CSS'
    }
  ],
  russianContent: [
    {
      order: 1,
      link: 'https://github.com/servosdesign/horror-ai',
      imageSrc: '/images/horror-ai.png',
      title: 'Horror.ai',
      description: 'Horror.ai является Vue.js Приложение на базе искусственного интеллекта, которое создает имитацию событий на тему фильмов ужасов с использованием API OpenAI, серверной части с Express и пользовательских подсказок для каждой конкретной темы ужасов. Пользователь регистрируется с помощью своих собственных ключей Openal API и управляет своей собственной токенизацией.',
      tag: 'VUE.js, OPENAI, Express'
    },

    {
      order: 2,
      link: 'https://github.com/servosdesign/rucream',
      imageSrc: '/images/rucream.png',
      title: 'ruCream',
      description: 'ruCream - это минималистичная тема кремового цвета в легком режиме для приложений vscode JavaScript, в значительной степени вдохновленная цветовыми темами Ayu. Базовый шаблон ruCream представляет собой модификацию выбора цвета темы Ayu Light при сохранении ее ключевых концепций. Оформленный в легкой и воздушной тематике, вдохновленный культовой цветовой палитрой десертов "Русский крем", состоящей из красных, сливочных, белых тонов и фирменной стеклянной или белой чаши, которая создает гладкое, минималистичное и даже восхитительное ощущение при написании.',
      tag: 'THEMES, VSCODE, JAVASCRIPT'
    },

    {
      order: 3,
      link: 'https://github.com/servosdesign/servos-marketplace',
      imageSrc: '/images/nft-marketplace.png',
      title: 'Servos Marketplace',
      description: "Servos Marketplace - это приложение NFT marketplace на базе Ethereum (DApp), созданное с использованием React, Solidity, Truffle и web3.js который позволяет пользователю просматривать и / или приобретать NFT ERC721 из числа товаров marketplace. Пользователь входит в систему со своим другим адресом кошелька и получает доступ к покупке сгенерированных Solidity / Truffle NFT ERC721, сделанных в сети разработчиков Rinkeby's.",
      tag: 'SOLIDITY, TRUFFLE, WEB3.JS, REACT'
    },
    {
      order: 4,
      link: 'https://github.com/servosdesign/minimalistic-questions.vue',
      imageSrc: '/images/minquestions.png',
      title: 'Minimalistic Questions',
      description: 'Минималистичные вопросы - это Vue.js приложение для электронного обучения, которое изменяет существующий банк вопросов путем рандомизации данных вопросов, динамического выбора количества вопросов, позволяет пользователю циклически просматривать вопросы с помощью кнопок "Предыдущий" и "следующий", подсчитывает общий балл для пользователя на основе отправки теста и улучшает пользовательский опыт с помощью минималистичного пользовательский интерфейс.',
      tag: 'VUE.js, JAVASCRIPT, eLearning',
      uniqueButton: true,
      uniqueLink: 'https://github.com/servosdesign/minimalistic-questions.js'
    },

    {
      order: 5,
      link: 'https://github.com/servosdesign/moses',
      imageSrc: '/images/moses.png',
      title: 'Moses',
      description: 'Moses - это ролевая игра в Unity2D с видом сверху вниз, пикселизированная, минималистичная, с возможностью выбора. Игрока проводят через различные сцены игры и оставляют за ним право выбора в различных ситуациях.',
      tag: 'UNITY, C#, GAME'
    },

    {
      order: 6,
      link: 'https://github.com/servosdesign/servos-coral',
      imageSrc: '/images/servos-coral.png',
      title: 'Servos Coral',
      description: 'Servos Coral - это приложение-клон imgur на JavaScript со стеком из NodeJS, ExpressJS, SQL и Handlebars, которое позволяет пользователям создавать аккаунты, размещать изображения, комментировать их и искать изображения.',
      tag: 'JAVASCRIPT, NODE.js, EXPRESS.js, SQL'
    },

    {
      order: 7,
      link: 'https://github.com/servosdesign/portfolio',
      imageSrc: '/images/portfolio.png',
      title: 'Portfolio',
      description: 'Портфолио - это специально созданное портфолио, которое периодически обновляется новыми проектами и дизайнами. Портфолио имеет минималистичный внешний вид. Я хотел, чтобы большая часть информации была доступна на одной странице. Дизайн полностью соответствует моим личным вкусам в веб-дизайне. Репозиторий содержит копию оригинального портфолио (HTML/CSS) и копию этого текущего дизайна (Vue.js )',
      tag: 'VUE.JS, JAVASCRIPT, HTML/CSS'
    }
  ]
}]

export default projectContent
