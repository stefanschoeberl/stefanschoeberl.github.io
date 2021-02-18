---
title: MiniJava-Compiler für WebAssembly
subtitle: Masterarbeit
date: 2020-06-30
links:
  - name: Masterarbeit (PDF)
    url: https://github.com/stefanschoeberl/masters-thesis/releases/download/v1.0/Masterarbeit.pdf
  - name: GitHub (Compiler)
    url: https://github.com/stefanschoeberl/MiniJava-Compiler
  - name: GitHub (Masterarbeit)
    url: https://github.com/stefanschoeberl/masters-thesis
  - name: Fibonacci-Rechner
    url: https://fibminijava.ssch.dev
technologies: [WebAssembly, ANTLR, Kotlin, Gradle, Node.js, WABT, JavaScript]
thumbnail: masters-thesis-thumbnail.png
---
Im Rahmen meines Masterstudiums Software Engineering befasste ich mich in meiner Masterarbeit mit dem Thema Compilerbau und WebAssembly.

## MiniJava-Compiler für WebAssembly auf Basis von ANTLR und Kotlin

### Kurzfassung

WebAssembly ist eine neue Technologie, die mittlerweile in aktuellen Browsern integriert ist. Seit Dezember 2019 ist WebAssembly ein offizieller Web-Standard des W3C. WebAssembly verwendet einen eigenen Bytecode, dessen Ausführungsmodell auf einer virtuellen Kellermaschine basiert und verspricht schnellere Ladezeiten und bessere Performanz als beispielsweise JavaScript. Dadurch ist es möglich, andere Programmiersprachen ohne Transpiler im Web einzusetzen. Dafür sind allerdings Compiler notwendig, die für WebAssembly Bytecode erzeugen können. Java Applets verfolgten einen ähnlichen Ansatz, indem sie die Java Virtual Machine (JVM) im Browser einsetzten, jedoch wird diese Technologie mittlerweile nicht mehr in aktuellen Browsern unterstützt.

Diese Masterarbeit befasst sich mit der Entwicklung eines Compilers für MiniJava, einer Teilmenge von Java. Dabei wird gezeigt, wie Sprachkonstrukte dieser Programmiersprache auf WebAssembly abgebildet werden können. Weiters wird auf das zur Ausführung notwendige Laufzeitsystem eingegangen. Eine Besonderheit dabei ist, dass Objekte in MiniJava auf JavaScript-Objekte abgebildet werden, dadurch ist beispielsweise im Browser ein direkter DOM-Zugriff möglich. Die praktische Anwendung des geschaffenen Compilers wird anhand einer Demo-Anwendung im Browser, einem Fibonacci-Rechner, demonstriert. Diese Anwendung wurde, bis auf generische notwendige Skripte zum Laden der Anwendung, zur Gänze in MiniJava implementiert. Der MiniJava-Compiler ist in Kotlin implementiert, der Scanner und Parser wurde mit ANTLR 4.8 generiert.

In dieser Masterarbeit wird damit eine Möglichkeit aufgezeigt, wie neue Programmiersprachen auf Basis von WebAssembly in das Web gebracht werden können.

### Abstract

WebAssembly is a new technology, which is supported in current browsers by now. Since december 2019 WebAssembly is an official Web standard of the W3C. WebAssembly uses its own bytecode, whose execution model is based on a stack machine and promises faster loading times and better performance than JavaScript, for example. Thus it is possible, to bring other programming languages without a transpiler to the Web. However, compilers that can produce bytecode for WebAssembly are necessary. Java Applets were based on a similar approach by using the Java virtual machine (JVM) within the browser, but this technology is no longer supported in current browsers.

This master's thesis deals with the development of a compiler for MiniJava, a subset of Java. It is shown how features of this programming language will be mapped to Web\-Assembly. In addition, the runtime system required for execution is described. A special feature is the direct mapping of objects in MiniJava to JavaScript objects. This enables direct DOM access in the browser, for example. The practical use of the created compiler is demonstrated with a browser demo application, which is a Fibonacci calculator. This application was implemented entirely in MiniJava, except for some generic scripts required to load the application. The MiniJava compiler is implemented in Kotlin, the lexer and parser was generated with ANTLR 4.8.

This master's thesis shows an approach, how new programming languages can be brought to the Web based on WebAssembly.