# wedding-invite

A personalised Hebrew wedding invitation website for Neta & William.
Plain HTML, CSS and a little JavaScript, with no build step and no dependencies.

## What it is

- A sealed envelope that opens into the invitation (with a record player and song)
- The invitation card, with a link to the venue on Waze
- A dress-code section, with a link to a Pinterest inspiration board
- A live countdown to the day, and an "Add to Google Calendar" button
- Two layouts from one page: a wide one for desktop and tablet, and a tall one for phones (up to 640px wide)

## Run it locally

```bash
node server.js
```

Then open http://localhost:8787.
Any static file server works; `server.js` is only a tiny helper.

## Structure

| Path | What's in it |
|---|---|
| `index.html` | The whole page: markup, styles and scripts |
| `el/` | Envelope and opened-envelope artwork |
| `s2/` | Invitation section artwork (lace frame, flowers, polaroid, icons, locket) |
| `s3/` | Dress-code section artwork (doily, flowers, polaroid) |
| `fonts/` | Self-hosted fonts |
| `audio/` | The song that plays when the envelope opens |
| `server.js` | Local static server |

## Fonts

Self-hosted from `fonts/`: Frank Ruhl Libre (Hebrew text), Luxurious Script and
Playfair Display SC (headings and countdown), Gveret Levin (handwritten captions)
and Libertinus Serif (fallback). All are open-licence typefaces from Google Fonts.

## Credits and notes

- The animated cupid cursor is the "Flying Cupid" cursor from
  [cursors-4u.com](https://www.cursors-4u.com/cursor/flying-cupid), inlined in `index.html`.
- `audio/song.mp3` is a personal choice of song. Make sure you are allowed to
  publish it before making this repository public.
- The artwork was exported from Canva and cut out into transparent images.
