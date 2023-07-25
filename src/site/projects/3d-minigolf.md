---
title: 3D Minigolf
subtitle: Browser Minigame
date: 2017-02-16
links:
  - name: Minigame
    icon: fas fa-rocket
    url: https://minigolf.ssch.dev
technologies: [ES6, three.js, cannon.js, HTML, CSS, Boostrap, Node.js, Express, pug.js, MariaDB]
thumbnail: 3d-minigolf-thumbnail.png
slideshow:
  - image: 3d-minigolf-1.png
    description: Screenshot Minigolf Homepage
  - image: 3d-minigolf-2.png
    description: Screenshot Minigolf Level 1
---

During the third semester of my bachelor's degree programme we had to build a semester project within the course "Web-Design and -Programming".
Everyone was encouraged to implement their own ideas, no specific requirements were given.

Around the same time I discovered the library [three.js](https://threejs.org){target="_blank" rel="noreferrer"}.
I always wanted to try 3D graphics in web apps and the university project was the perfect opportunity for this.
three.js looked quite promising.

The idea for the minigolf game was inspired by [OpenGameArt assets](http://opengameart.org/content/3d-minigolf-pack){target="_blank" rel="noreferrer"}. 

But just 3D graphics is not enough for a minigame...

[cannon.js](https://schteppe.github.io/cannon.js/){target="_blank" rel="noreferrer"} was used as physics engine and enables the simulation of multiple bodies and their interactions with each other.
Finally, cannon.js had to be connected to three.js, so that all objects (the floor, walls, golfball and the windmill) are also rendered at the same location, where they "exist" in the simulated world.

The whole game was not implemented in standard JavaScript, but in ECMAScript 6 (ES6).
ES6 supports classes, among other features, and facilitates cleaner code.
[browserify](http://browserify.org){target="_blank" rel="noreferrer"} bundles all source code files and libraries into a single JavaScript file, which is downloaded by the browser when loading the game.
Furthermore, [Babel](https://babeljs.io){target="_blank" rel="noreferrer"} transforms ES6 into traditional JavaScript code.

On the server side, Node.js is used to manage the highscore board. MariaDB is used as storage for the scores.
