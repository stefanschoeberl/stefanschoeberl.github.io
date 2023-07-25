---
title: Photo Book DSL
subtitle: Kotlin DSL for the creation of photo books
date: 2019-07-15
links:
  - name: GitHub
    icon: fab fa-github
    url: https://github.com/stefanschoeberl/photobook-dsl
technologies: [Kotlin, Apache PDFBox]
thumbnail: photobook-dsl-thumbnail.jpg
slideshow:
  - image: photobook-dsl-1.jpg
    description: Screenshot page with one photo
  - image: photobook-dsl-2.jpg
    description: Screenshot page with three photos
  - image: photobook-dsl-3.jpg
    description: Screenshot page with four photos (cropped)
  - image: photobook-dsl-4.jpg
    description: Screenshot page with four photos (full size)
---

The idea for this project arose when some friends and I wanted to create a photo book together.
We aimed for a relatively simple design with a straightforward layout: no background and one to four photos per page.
We quickly ruled out using graphic design software, partly due to cost considerations, and we wanted the ability to create pages quickly, rather than individually dragging and dropping each photo (which would be slower).

It seemed appropriate to develop a Domain-Specific Language (DSL) that allows us to declaratively describe the structure of the photo book and then export it as a PDF file.
This approach allows us to separate the content (e.g., "Photo A and Photo B on the left/right side of a page") from the actual layout (trimming, photo sizes, photo positions).

The DSL was implemented in Kotlin, and the PDFs are generated using [Apache PDFBox](https://pdfbox.apache.org){target="_blank" rel="noreferrer"}.

With this DSL, a photo book can be defined, for example, as follows:

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

[Here](https://github.com/stefanschoeberl/photobook-dsl/raw/master/example-pdfs/book.pdf){target="_blank" rel="noreferrer"} is a completed example PDF (with freely available photos from [Pexels](https://www.pexels.com){target="_blank" rel="noreferrer"}) available for download.
