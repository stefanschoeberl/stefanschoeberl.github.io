---
title: Hungry Hagenberg Bot
subtitle: Telegram Bot
date: 2018-04-15
links:
  - name: Telegram Bot
    icon: fab fa-telegram-plane
    url: https://t.me/HungryHagenbergBot
technologies: [Spring Boot, MariaDB, Telegram, mittag.at]
thumbnail: hungry-hagenberg-bot-thumbnail.png
---

Während meinem Bachelorstudium standen meine Studienkollegen und ich jeden Tag vor derselben Frage: "Wo gehen wir heute essen?"
Auch wenn sich die Auswahl sehr in Grenzen hält, gibt es in Hagenberg dennoch ein vielfältiges Angebot an Essensmöglichkeiten.

Etwa zur selben Zeit entdeckten wir die Plattform [mittag.at](https://www.mittag.at){:target="_blank" rel="noreferrer"}, die abhängig vom Standort Mittagsmenüs in der Nähe anzeigt.

Typischerweise koordinierten wir uns kurz vor der Mittagspause via Chat, wohin wir denn schlussendlich essen gehen wollen.
Oft wurden dabei die Menüs aus mittag.at in den Chat kopiert.

Da Software-Entwickler sehr gerne wiederholende Tätigkeiten [automatisieren](https://xkcd.com/1319/){:target="_blank" rel="noreferrer"}, begannen zwei Studienkollegen und ich im 4. Semester unseres Studiums, mittag.at gleich direkt in den Chat einzubauen - so müsste man zumindest nicht mehr hin- und herkopieren und der Abruf der Website entfällt dann praktischerweise gleich auch noch.
Jeden Tag erhielt man dann pünktlich zu einer fix einprogrammierten Uhrzeit eine Benachrichtigung.
So entstand die erste Version vom Bot mit Node.js und MongoDB.

Etwa ein Jahr später wurde die API von mittag.at erweitert.
Man kann jetzt die Menüergebnisse noch präziser abfragen als vorher.
Es bot sich also an, unseren Bot an die neue API zu adaptieren.
Da wir ziemlich zeitgleich gerade das Spring-Framework in einer Lehrveranstaltung kennenlernten (von dem ich sehr begeistert war und es immer noch bin), bot sich eine Neuimplementierung an.
Außerdem konnte ich bei dieser Gelegenheit gleich einige neue Features umsetzen (zum Beispiel das Anzeigen des Menüs für den Folgetag oder das Ein- und Ausschalten der täglichen 10:00-Benachrichtigung).
So entstand Version 2 des Hungry Hagenberg Bot.
