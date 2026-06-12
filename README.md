# A Letter For You 💌

A small, calming single-page website featuring an interactive envelope.
Click (or focus + press Enter/Space) the envelope in the center of the
screen — the flap swings open, the letter rises out, and the message
gently fades into view.

## Features

- **Soft, relaxing palette** — pastel sky gradient with slow-drifting
  ambient blobs in the background.
- **Centered envelope** that lifts on hover.
- **Open animation** — the flap rotates open, the letter slides up, and
  the content fades in with an easing transition.
- **Keyboard accessible** — the envelope is focusable and responds to
  Enter / Space.
- **No build step, no dependencies** — plain HTML, CSS, and JavaScript.

## Run it

Just open `index.html` in any modern browser:

```bash
# from the project folder
start index.html        # Windows
# or simply double-click index.html
```

Or serve it locally:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Project structure

```
letter-website/
├── index.html   # markup: envelope, flap, letter
├── style.css    # palette, layout, open-animation transitions
├── script.js    # click / keyboard interaction
└── README.md
```

## Customize the message

Edit the `.letter__content` block in `index.html` — change the title
(`Hello World`), the body text, and the signature to write your own note.
