---
title: Super Polygon Collider 5000
subtitle: iOS Game
date: 2014-02-24
technologies: [iOS, Objective-C, SpriteKit]
thumbnail: super-polygon-collider-5000-thumbnail.png
---

Da ich schon immer sehr mathematikbegeistert war (und es immer noch bin), nahm ich an der "Projektwoche Angewandte Mathematik" der JKU während meiner Gymnasialzeit teil.
Im Jahr 2014 wurde ein Workshop zum Thema [Polygone](http://www.projektwoche.jku.at/2014/projekt2014_proj06.shtml){:target="_blank" rel="noreferrer"} angeboten.

Dort lernten wir die Grundlagen zu Polygonen und überlegten uns Algorithmen zu verschiedenen Problemstellungen: Liegt ein Punkt in einem Polygon? Schneiden sich zwei Polygone? Wie berechnet man die Fläche eines Polygones?

Die Algorithmen testeten wir an einem praktischen Beispiel in Mathematica. Dort musste ein Raumschiff (vereinfacht dargestellt als Dreieck) mit Hilfe eines Sliders durch einen Tunnel navigiert werden.
Das Spiel soll dabei eine Kollision zwischen dem Raumschiff und dem Tunnel erkennen - beide Elemente wurden jeweils als Polygon modelliert.

Da ich in dieser Zeit gerade die Grundlagen der iOS-Entwicklung lernte, war ich motiviert, aus diesem kleinen Spiel eine App zu entwickelt.
So entstand daraus der "Super Polygon Collider 5000".
Also portierte ich die notwendigen Algorithmen von Mathematica nach Objective-C. Die Grafik wurde mit SpriteKit umgesetzt.

Die App stand eine Zeit lang im offiziellen App Store zum Download zur Verfügung, mittlerweile leider nicht mehr.