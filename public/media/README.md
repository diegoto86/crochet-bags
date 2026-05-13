# Hero media

Use this folder for homepage hero images or videos.

Recommended names:

```text
hero.jpg
hero.webp
hero.mp4
```

To switch the hero media, edit `heroMedia` in `src/App.jsx`:

```js
heroMedia: {
  type: "image",
  src: "/media/hero.jpg",
  poster: "/media/hero.jpg",
}
```

For video:

```js
heroMedia: {
  type: "video",
  src: "/media/hero.mp4",
  poster: "/media/hero-poster.jpg",
}
```
