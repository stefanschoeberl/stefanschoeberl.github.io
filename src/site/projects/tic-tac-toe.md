---
title: Tic Tac Toe
subtitle: Multiplayer Browser Minigame
date: 2016-07-01
links:
  - name: Minigame
    icon: fas fa-rocket
    url: https://tic-tac-toe.ssch.dev
technologies: [Angular 2, HTML, CSS, JavaScript, TypeScript, Boostrap, Node.js, Express, socket.io]
thumbnail: tic-tac-toe-thumbnail.png
---

In July 2016, I became interested in developing Single-Page Applications and came across AngularJS during my research, which I immediately started experimenting with.
While experimenting, I discovered [Angular 2](https://angular.io){target="_blank" rel="noreferrer"}, the successor to AngularJS.
At that time, Angular 2 was still in the RC (Release Candidate) phase, and I decided to take a closer look at the library before its official release.

I noticed right away that Angular 2 was fundamentally different from AngularJS.
Back then, even setting up a project was not a trivial task...
After going through some tutorials and a lot of experimentation, I became convinced about Angular 2 and decided to implement a small multiplayer game using it.

I wanted to create a Tic-Tac-Toe game that could be played simultaneously and in real-time on multiple browsers.
For this to work, a server needed to be able to notify the browsers whenever a player placed a symbol (X or O).
[socket.io](https://socket.io){target="_blank" rel="noreferrer"} presented itself as an easy-to-integrate library that abstracted the underlying communication using WebSockets.

On the server-side, Node.js was used to manage individual game rounds and to notify the browsers.
