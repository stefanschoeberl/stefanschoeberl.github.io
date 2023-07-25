---
title: MiniJava Compiler for WebAssembly
subtitle: Master's Thesis
date: 2020-06-30
links:
  - name: Master's thesis (PDF)
    icon: fas fa-file
    url: https://github.com/stefanschoeberl/masters-thesis/releases/download/v1.0/Masterarbeit.pdf
  - name: GitHub (Compiler)
    icon: fab fa-github
    url: https://github.com/stefanschoeberl/MiniJava-Compiler
  - name: GitHub (Master's thesis)
    icon: fab fa-github
    url: https://github.com/stefanschoeberl/masters-thesis
  - name: Fibonacci calculator
    icon: fas fa-rocket
    url: https://fibminijava.ssch.dev
media:
  - name: Blogpost OCG
    icon: far fa-newspaper
    url: https://blog.ocg.at/2022/11/ocg-forderpreis-fh-2022/
  - name: Presse release OCG
    icon: far fa-newspaper
    url: https://www.ots.at/presseaussendung/OTS_20221205_OTS0078/informatik-studierende-der-fachhochschulen-kufstein-und-hagenberg-ausgezeichnet
  - name: OCG Journal 01 / 2023
    icon: far fa-newspaper
    url: https://www.ocg.at/sites/ocg.at/files/medien/pdfs/OJ2023-01.pdf
  - name: Article FH OÖ / SE News
    icon: far fa-newspaper
    url: https://www.fh-ooe.at/campus-hagenberg/studiengaenge/master/software-engineering/news-events/news/news/ocg-foerderpreis-fh-fuer-software-engineering-student/
  - name: Article MeinBezirk.at
    icon: far fa-newspaper
    url: https://www.meinbezirk.at/freistadt/c-lokales/preis-fuer-beste-masterarbeit-geht-nach-hagenberg_a5784259
  - name: Article Tips
    icon: far fa-newspaper
    url: https://www.tips.at/nachrichten/freistadt/wirtschaft-politik/589520-hagenberg-absolvent-holt-preis-fuer-beste-masterarbeit
  - name: Article FH OÖ News
    icon: far fa-newspaper
    url: https://www.fh-ooe.at/ueber-uns/news/news/ocg-preis-fuer-beste-masterarbeit-geht-nach-hagenberg/
  - name: Article OÖNachrichten
    icon: far fa-newspaper
    url: https://www.nachrichten.at/oberoesterreich/fhooe/campushagenberg/die-sprache-des-internets;art219249,3763581
technologies: [WebAssembly, ANTLR, Kotlin, Gradle, Node.js, WABT, JavaScript]
thumbnail: masters-thesis-thumbnail.png
---
As part of my master's degree in Software Engineering, I focused on the topic of Compilers and WebAssembly in my master's thesis.

The master's thesis was awarded the [Förderpreis-FH](https://www.ocg.at/de/fp-fh){target="_blank" rel="noreferrer"} 2022 by the Austrian Computer Society (Österreichische Computer Gesellschaft - OCG).

### MiniJava-Compiler für WebAssembly auf Basis von ANTLR und Kotlin

WebAssembly ist eine neue Technologie, die mittlerweile in aktuellen Browsern integriert ist. Seit Dezember 2019 ist WebAssembly ein offizieller Web-Standard des W3C. WebAssembly verwendet einen eigenen Bytecode, dessen Ausführungsmodell auf einer virtuellen Kellermaschine basiert und verspricht schnellere Ladezeiten und bessere Performanz als beispielsweise JavaScript. Dadurch ist es möglich, andere Programmiersprachen ohne Transpiler im Web einzusetzen. Dafür sind allerdings Compiler notwendig, die für WebAssembly Bytecode erzeugen können. Java Applets verfolgten einen ähnlichen Ansatz, indem sie die Java Virtual Machine (JVM) im Browser einsetzten, jedoch wird diese Technologie mittlerweile nicht mehr in aktuellen Browsern unterstützt.

Diese Masterarbeit befasst sich mit der Entwicklung eines Compilers für MiniJava, einer Teilmenge von Java. Dabei wird gezeigt, wie Sprachkonstrukte dieser Programmiersprache auf WebAssembly abgebildet werden können. Weiters wird auf das zur Ausführung notwendige Laufzeitsystem eingegangen. Eine Besonderheit dabei ist, dass Objekte in MiniJava auf JavaScript-Objekte abgebildet werden, dadurch ist beispielsweise im Browser ein direkter DOM-Zugriff möglich. Die praktische Anwendung des geschaffenen Compilers wird anhand einer Demo-Anwendung im Browser, einem Fibonacci-Rechner, demonstriert. Diese Anwendung wurde, bis auf generische notwendige Skripte zum Laden der Anwendung, zur Gänze in MiniJava implementiert. Der MiniJava-Compiler ist in Kotlin implementiert, der Scanner und Parser wurde mit ANTLR 4.8 generiert.

In dieser Masterarbeit wird damit eine Möglichkeit aufgezeigt, wie neue Programmiersprachen auf Basis von WebAssembly in das Web gebracht werden können.

### MiniJava-Compiler for WebAssembly based on ANTLR and Kotlin

WebAssembly is a new technology, which is supported in current browsers by now. Since december 2019 WebAssembly is an official Web standard of the W3C. WebAssembly uses its own bytecode, whose execution model is based on a stack machine and promises faster loading times and better performance than JavaScript, for example. Thus it is possible, to bring other programming languages without a transpiler to the Web. However, compilers that can produce bytecode for WebAssembly are necessary. Java Applets were based on a similar approach by using the Java virtual machine (JVM) within the browser, but this technology is no longer supported in current browsers.

This master's thesis deals with the development of a compiler for MiniJava, a subset of Java. It is shown how features of this programming language will be mapped to Web\-Assembly. In addition, the runtime system required for execution is described. A special feature is the direct mapping of objects in MiniJava to JavaScript objects. This enables direct DOM access in the browser, for example. The practical use of the created compiler is demonstrated with a browser demo application, which is a Fibonacci calculator. This application was implemented entirely in MiniJava, except for some generic scripts required to load the application. The MiniJava compiler is implemented in Kotlin, the lexer and parser was generated with ANTLR 4.8.

This master's thesis shows an approach, how new programming languages can be brought to the Web based on WebAssembly.
