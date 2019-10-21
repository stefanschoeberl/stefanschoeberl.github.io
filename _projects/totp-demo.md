---
title: TOTP Demo
subtitle: Test-Webapp für One-Time Passwords
date: 2016-03-08
live: https://totp.ssch.dev
technologies: [TOTP, Node.js, Express, Jade (jetzt pug.js), HTML, CSS, JavaScript]
thumbnail: totp-demo-thumbnail.png
---

Bei einem [Vortrag der fhLUG](https://fhlug.at/2016/02/onetime-passwords/){:target="_blank" rel="noreferrer"} an der FH Hagenberg wurde ich erstmals auf One-Time Passwords aufmerksam.
Besonders die zeitbasierte Variante davon (das erste T in TOTP steht für Time) fand ich besonders interessant.

Typsicherweise wird bei One-Time Passwords einmal ein "Secret" zwischen dem Server und dem Benutzer ausgetauscht. Dies kann beispielsweise im Registrierungsprozess über einen QR-Code erfolgen, den der Benutzer dann mit einer kompatiblen App scannen muss.

Bei späteren Logins kann dann über dieses "Secret" und die aktuelle Zeit ein Code erzeugt werden, der für eine bestimmte Zeitspanne gültig ist.
Da der Server und die App das Secret kennen, können sie so unabhängig von einander denselben Code generieren - vorausgesetzt, die Uhren beider Systeme laufen einigermaßen synchron.

So entstand eine kleine Webanwendung, mit der sich dieser Workflow ausprobieren lässt. Benötigt wird nur eine App, die otpauth://-URIs unterstützt (zum Beispiel Google Authenticator).