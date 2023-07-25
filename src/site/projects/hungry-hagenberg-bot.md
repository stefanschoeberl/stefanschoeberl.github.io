---
title: Hungry Hagenberg Bot
subtitle: Telegram Bot
date: 2018-04-15
links:
  - name: Telegram Bot
    icon: fab fa-telegram
    url: https://t.me/HungryHagenbergBot
technologies: [Spring Boot, MariaDB, Telegram, mittag.at]
thumbnail: hungry-hagenberg-bot-thumbnail.png
---

During my bachelor's studies, my fellow students and I faced the same question every day: "Where are we going to eat today?"
Even though the options were limited, Hagenberg still offered a diverse range of lunch possibilities.

Around the same time, we discovered the platform [mittag.at](https://www.mittag.at){target="_blank" rel="noreferrer"}, which displays lunch menus nearby based on the user's location.

Typically, we would coordinate just before lunchtime via chat to decide where we wanted to eat.
Often, we would copy and paste the menus from mittag.at into the chat.

As software developers love to [automate](https://xkcd.com/1319/){target="_blank" rel="noreferrer"} repetitive tasks, two of my fellow students and I started integrating mittag.at directly into the chat during the 4th semester of our studies.
This way, we no longer had to copy and paste, and we could conveniently avoid accessing the website as well.
Each day, we would receive a notification at a pre-programmed time.
This is how the first version of the bot was created using Node.js and MongoDB.

About a year later, the mittag.at API was expanded, allowing for more precise menu queries than before.
It seemed like a good idea to adapt our bot to the new API.
Since we were simultaneously getting acquainted with the Spring Framework in one of our courses (which I was very excited about and still am), a reimplementation was fitting.
This also provided an opportunity to implement several new features (such as displaying the menu for the following day or toggling the daily 10:00 notification).
Thus, Version 2 of the Hungry Hagenberg Bot came into existence.
