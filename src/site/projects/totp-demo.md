---
title: TOTP Demo
subtitle: Test Web App for One-Time Passwords
date: 2016-03-08
links:
  - name: Web-App
    icon: fas fa-rocket
    url: https://totp.ssch.dev 
technologies: [TOTP, Node.js, Express, Jade (now pug.js), HTML, CSS, JavaScript]
thumbnail: totp-demo-thumbnail.png
images: [totp-demo-1.png]
---

During a [fhLUG talk](https://fhlug.at/2016/02/onetime-passwords/){target="_blank" rel="noreferrer"} at FH Hagenberg, I first learned of One-Time Passwords (OTPs).
I found the time-based variant (the first "T" in TOTP stands for Time) particularly interesting.

Typically, for One-Time Passwords, a secret is exchanged between the server and the user once.
This can be done, for example, during the registration process using a QR code that the user scans with a compatible app.

During subsequent logins, a code can be generated based on this secret and the current time, which is valid for a specific period.
Since the server and the app both know the secret, they can independently generate the same code — provided that both systems' clocks are reasonably synchronized.

This led to the creation of a small web application that allows users to try out this workflow. The only requirement is an app that supports otpauth:// URIs (such as Google Authenticator).
