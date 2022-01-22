---
title: Persönliche Website
date: 2019-09-23
links:
  - name: Website
    icon: fas fa-rocket
    url: https://schoeberl.dev
  - name: GitHub
    icon: fab fa-github
    url: https://github.com/stefanschoeberl/stefanschoeberl.github.io
technologies: [GitHub Pages, Eleventy, Tailwind CSS, Font Awesome, UIkit]
thumbnail: personal-website-thumbnail.png
---
Schon lange wollte ich eine persönliche Website für mich erstellen.
Als Google im Jahr 2019 begann, .dev-Domains anzubieten, war das der perfekte Anlass, dieses längst überfällige Projekt zu realisieren.

Eines der Hauptziele war das langfristige Warten der Website möglichst einfach zu gestalten.
[Jekyll](https://jekyllrb.com){target="_blank" rel="noreferrer"} war dafür genau das richtige Tool.
Damit lässt sich die Struktur der Website mit Templates definieren, die dann dynamisch mit Daten befüllt werden können.
Der Inhalt der Website wird in Form von YML (zum Beispiel Technologie-Übersicht) oder Markdown (zum Beispiel Projekt-Texte) eingepflegt.
Außerdem lässt sich dadurch die gesamte Website in Git verwalten, da sie zu 100% aus Code besteht.

Als Design-Framework wurde [UIkit](https://getuikit.com){target="_blank" rel="noreferrer"} eingesetzt.

Fürs Hosting bot sich [GitHub Pages](https://pages.github.com){target="_blank" rel="noreferrer"} an. GitHub Pages unterstützt Jekyll direkt und "kompiliert" die Seite bei jedem Push automatisch.
Standardmäßig wird die Website auf einer .github.io-Subdomain gehostet, es lässt sich aber sehr einfach eine eigene Domain hinzufügen.

2021 erhielt die Website ein neues Aussehen.
Das Standard-Design von UIkit wurde durch ein eigenes individuelles Design abgelöst.
Dieses wurde mit [Tailwind CSS](https://tailwindcss.com){target="_blank" rel="noreferrer"} umgesetzt.
Alle Icons stammen nun von [Font Awesome](https://fontawesome.com){target="_blank" rel="noreferrer"}.
Aus UIkit blieben nur einzelne Komponenten erhalten, wie zum Beispiel die Slideshow und das Masonry-Grid.
Da für Tailwind CSS nun zusätzliche Schritte beim Kompilieren notwendig sind, wurde eine GitHub Action dafür konfiguriert.

2022 wurde die Website von Jekyll auf [Eleventy](https://www.11ty.dev){target="_blank" rel="noreferrer"} umgestellt.
Dadurch fällt Ruby als Abhängigkeit weg und der gesamte Build-Prozess läuft nun über npm und Node.js.
Bei einem Update der Website erfolgt das Kompilieren der Seite und des CSS nun gemeinsam in einer GitHub Action.
