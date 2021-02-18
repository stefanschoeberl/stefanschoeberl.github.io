---
title: Autonomes Fahren
subtitle: Bachelorarbeit
date: 2018-02-28
links:
  - name: GitHub
    url: https://github.com/stefanschoeberl/Raspberry-Pi-Autonomous-Driving
technologies: [Raspberry Pi, Python, TensorFlow, matplotlib, iOS, UDP]
thumbnail: bachelors-thesis-thumbnail.png
---
Im Rahmen meines Bachelorstudiums Software Engineering befasste ich mich in meiner Bachelorarbeit mit dem Thema Autonomes Fahren.

## Autonomes Fahren auf Basis eines Raspberry Pi

### Kurzfassung

Das Ziel dieser Bachelorarbeit war, einen kamerabasierten Spurhalteassistent für ein kleines Modellauto auf Basis eines Raspberry Pi zu entwickeln. Die gesamte Steuerung soll dabei auf dem Raspberry Pi "offline" erfolgen. Dabei werden zwei unterschiedliche Ansätze verfolgt: Einmal mit Hilfe eines künstlichen neuronalen Netzwerks gemeinsam mit TensorFlow und einmal schlanker ohne künstliches neuronales Netzwerk. Die Arbeit bildet den gesamten Prozess, beginnend mit technischen Grundlagen bis hin zur Implementierung, ab. Die wichtigste Fragestellung war dabei, ob die Berechnungen auf dem Raspberry Pi in Echtzeit möglich sind. Das Ergebnis ist, dass die künstlichen neuronalen Netzwerke mit TensorFlow zu langsam sind, um das Fahren zu ermöglichen. Der schlankere Ansatz funktionierte besonders gut. Alle Versuche wurden auf einer Teststrecke mit starken Kontrasten unter möglichst guten Lichtverhältnissen durchgeführt, um so saubere Daten zu erhalten.

Diese Bachelorarbeit dient als Grundlage für all jene, die selbst ein autonomes Modellauto entwickeln wollen. Sie soll aber auch Interessierten die Details der Umsetzung näher bringen.

### Abstract

The goal of this bachelor thesis was to develop a camera based lane keeping assistant for a small model car using a Raspberry Pi. All calculations for stearing should only be processed on the Raspberry Pi itself. There will be two different approaches: The first one uses artificial neural networks with TensorFlow. The second approach is slimmer and does not use any artificial networks at all. The thesis summarizes the whole development processes from technical basics to the implementation. The most important research task was if it is possible to process all necessary calculations in real time. The result is that artificial neural networks cannot be evaluated with TensorFlow fast enough and therefore driving is not possible with this approach. The slimmer approach worked very well. All tests were performed on a track with high contrasts and in pretty good light conditions to obtain accurate data.

This bachelor thesis serves as a basis for those, who want to develop an autonomous model car themselves. It should also give the interested audience a deeper insight into details of the implementation.