---
title: Tic Tac Toe
subtitle: Multiplayer-Minigame im Browser
date: 2016-07-01
links:
  - name: Minigame
    icon: fas fa-rocket
    url: https://tic-tac-toe.ssch.dev
technologies: [Angular 2, HTML, CSS, JavaScript, TypeScript, Boostrap, Node.js, Express, socket.io]
thumbnail: tic-tac-toe-thumbnail.png
---

Im Juli 2016 interessierte ich mich erstmals fürs Entwickeln von Single-Page-Applications und stoß bei der Recherche auf AngularJS, mit dem ich gleich zu experimentieren begann.
Beim Experimentieren entdeckte ich [Angular 2](https://angular.io){:target="_blank" rel="noreferrer"}, den Nachfolger von AngularJS.
Zum damaligen Zeitpunkt war Angular 2 noch in der RC-Phase und ich beschloss daher, mir die Library vor dem offiziellen Release mal genauer anzusehen.

Sofort fiel auf, dass Angular 2 sich fundamental von AngularJS unterscheidet. Damals war selbst das Projektaufsetzen ein nicht triviales Unterfangen...
Nach einigen Tutorials und viel experimentieren war ich von Angular 2 überzeugt und beschloss ein kleines Multiplayer-Spiel damit umzusetzen.

Tic-Tac-Toe soll auf mehreren Browsern gleichzeitig und in Echtzeit gespielt werden können.
Damit dies funktioniert, muss ein Server die Browser benachrichtigen können, sobald ein Spieler ein Symbol (X oder O) setzt.
Dafür bot sich [socket.io](https://socket.io){:target="_blank" rel="noreferrer"} als eine einfach zu integrierende Library an, die die darunterliegende Kommunikation über Websockets abstrahiert.

Serverseitig läuft Node.js zum Verwalten der einzelnen Spielrunden, sowie zum Benachrichtigen der Browser.
