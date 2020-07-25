---
title: Fotobuch DSL
subtitle: Kotlin DSL zum Erstellen von Fotobüchern
date: 2019-07-15
github: https://github.com/stefanschoeberl/photobook-dsl
technologies: [Kotlin, Apache PDFBox]
thumbnail: photobook-dsl-thumbnail.jpg
images: [photobook-dsl-1.jpg, photobook-dsl-2.jpg, photobook-dsl-3.jpg, photobook-dsl-4.jpg]
---

Die Idee zu diesem Projekt entstand dadurch, dass einige Freunde und ich gemeinsam ein Fotobuch erstellen wollten.
Dabei sollte das Design relativ schlicht und das Layout sehr einfach gehalten werden: Kein Hintergrund und 1 - 4 Fotos pro Seite.
Ein grafischer Designer fiel dabei relativ schnell unter anderem aus Kostengründen weg, außerdem sollte es möglich sein, eine Seite nach der anderen zügig erstellen zu können, anstatt (langsamer) mit Drag-und-Drop jedes Foto einzeln hineinzuziehen.

Es bot sich an, eine DSL dafür zu entwicklen, mit der man deklarativ die Struktur des Fotobuchs beschreiben kann und anschließend es als PDF-Datei exportieren konnte. So ist es möglich, den Inhalt (zum Beispiel "Foto A und Foto B links/rechts auf einer Seite") vom tatsächlichen Layout (Schnittzugabe, Größe der Fotos, Position der Fotos) zu trennen.

Die DSL wurde in Kotlin umgesetzt. Die PDFs werden mit [Apache PDFBox](https://pdfbox.apache.org){:target="_blank" rel="noreferrer"} erzeugt. 

Mit der DSL lässt sich beispielsweise ein Fotobuch folgendermaßen definieren:

```kotlin
val book = book {

    page(PageType.ONE_ASPECT_FILL) {
        image("path/to/image.jpg")
    }

    page(PageType.TWO_SIDE_BY_SIDE_FIT) {
        image("path/to/image.jpg")
        image("path/to/image.jpg")
    }

    // more pages ...
}
```

[Hier](https://github.com/stefanschoeberl/photobook-dsl/raw/master/example-pdfs/book.pdf){:target="_blank" rel="noreferrer"} steht ein fertiges Beispiel-PDF (mit frei verfügbaren Fotos von [Pexels](https://www.pexels.com){:target="_blank" rel="noreferrer"}) zum Download zur Verfügung.