---
title: "3D Minigolf"
subtitle: Minigame im Browser
date: 2017-02-16
live: https://minigolf.ssch.dev
technologies: [ES6, three.js, cannon.js, HTML, CSS, Boostraph, Node.js, Express, pug.js, MariaDB]
thumbnail: 3d-minigolf-thumbnail.png
images: [3d-minigolf-1.png, 3d-minigolf-2.png]
---

Im 3. Semester meines Bachelorstudiums mussten wir ihm Rahmen der Lehrveranstaltung "Web-Design und -Programmierung" ein Semesterprojekt erstellen.
Genaue Vorgaben gab es nicht, es war jedem freigestellt, eine eigene Idee umzusetzen.

Etwa zur der selben Zeit entdeckte ich die Bibliothek [three.js](https://threejs.org){:target="_blank" rel="noreferrer"}.
Da ich ohnehin schon länger einmal 3D-Grafik im Browser ausprobieren wollte, war es die ideale Gelegenheit, das im Rahmen des FH-Projekts zu tun.
three.js machte dabei einen sehr guten Eindruck.

Die Idee zum Minigolf-Spiel kam von [OpenGameArt-Assets](http://opengameart.org/content/3d-minigolf-pack){:target="_blank" rel="noreferrer"}.

Aber 3D-Grafik reicht bei einem Minigame nicht...

[cannon.js](https://schteppe.github.io/cannon.js/){:target="_blank" rel="noreferrer"} diente dabei als Physicsengine und ermöglicht, mehrere physikalische Körper und deren Interaktionen untereinder innerhalb einer eigenen "Welt" zu simulieren. 
Anschließend musste cannon.js noch mit three.js verknüpft werden, damit die Objekte (Boden, Wände, Golfball, Windrad) auch genau dort angezeigt werden, wo sie sich in der simulierten Welte befinden.

Implementiert wurde das gesamte Spiel nicht in klassischem JavaScript, sondern ECMAScript 6 (ES6).
ES6 unterstützt under anderem Klassen und ermöglichte eine saubere Strukturierung des Codes.
Mit [browserify](http://browserify.org){:target="_blank" rel="noreferrer"} wurden dann alle Quellcode-Dateien und npm-Libraries in eine einzige JavaScript-Datei zusammengefasst, die beim Starten des Spiels vom Browser heruntergeladen wird.
Außerdem transformiert [Babel](https://babeljs.io){:target="_blank" rel="noreferrer"} den ES6-Code in klassichen JavaScript-Code.

Serverseitig läuft Node.js zur Verwaltung der Highscore-Liste. Die Daten der Highscore-Liste werden in einer MariaDB-Datenbank gespeichert.
