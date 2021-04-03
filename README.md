# Center.js

Center.js is a HTML5 Canvas based library that allows you to create simple text based icons, avatars, logos, and more. The library assists with drawing simple shapes, centering text, and setting fonts and colors.

## Why

Centering text with HTML5 canvas using `textAlign` and `textBaseline` has different behavior across browsers and fonts. Center.js removes inconsistencies by manually centering text.

## Avatars

![Avatars 1](./examples/avatars-1.png)
![Avatars 2](./examples/avatars-2.png)
![Avatars 3](./examples/avatars-3.png)
![Avatars 4](./examples/avatars-4.png)
![Avatars 5](./examples/avatars-5.png)
![Avatars 6](./examples/avatars-6.png)

## Logos

![Logos](./examples/logos-1.png)

## Icons

![Icons 1](./examples/icons-1.png)
![Icons 2](./examples/icons-2.png)
![Icons 3](./examples/icons-3.png)

## Usage

The centerjs library takes a canvas object and some configuration.

```JavaScript
centerjs({
  canvas: document.getElementById("canvas"),
  width: 64,
  height: 64,
  shape: "square",
  fontColor: "#581845",
  backgroundColor: "#DAF7A6",
  text: "C",
  fontFamily: "Helvetica",
  fontSize: 48
});
```

![Usage](./examples/usage-1.png)

## Shapes

There are 3 shapes to choose from:

- square
- circle
- rounded

```JavaScript
centerjs({
  canvas: document.getElementById("square"),
  width: 64,
  height: 64,
  shape: "square",
  fontColor: "white",
  backgroundColor: "#FFC300",
  text: "C",
  fontFamily: "Helvetica",
  fontSize: 48
});
```

![Shapes Square](./examples/shapes-square.png)

```JavaScript
centerjs({
  canvas: document.getElementById("circle"),
  width: 64,
  height: 64,
  shape: "circle",
  fontColor: "white",
  backgroundColor: "#FFC300",
  text: "C",
  fontFamily: "Helvetica",
  fontSize: 48
});
```

![Shapes Circle](./examples/shapes-circle.png)

```JavaScript
centerjs({
  canvas: document.getElementById("rounded"),
  width: 64,
  height: 64,
  shape: "rounded",
  fontColor: "white",
  backgroundColor: "#FFC300",
  text: "C",
  fontFamily: "Helvetica",
  fontSize: 48
});
```

![Shapes Rounded](./examples/shapes-rounded.png)

## Dimensions

The dimensions of the canvas can be controlled using the `width` and `height` attributes which are measured in pixels.

```JavaScript
centerjs({
  canvas: document.getElementById("square"),
  width: 128,
  height: 64,
  shape: "square",
  fontColor: "white",
  backgroundColor: "#FF5733",
  text: "C",
  fontFamily: "Helvetica",
  fontSize: 48
});
```

![Dimensions 128x64](./examples/dimensions-128x64.png)

```JavaScript
centerjs({
  canvas: document.getElementById("circle"),
  width: 128,
  height: 128,
  shape: "circle",
  fontColor: "white",
  backgroundColor: "#FF5733",
  text: "C",
  fontFamily: "Helvetica",
  fontSize: 48
});
```

![Dimensions 128x128](./examples/dimensions-128x128.png)

```JavaScript
centerjs({
  canvas: document.getElementById("rounded"),
  width: 64,
  height: 128,
  shape: "rounded",
  fontColor: "white",
  backgroundColor: "#FF5733",
  text: "C",
  fontFamily: "Helvetica",
  fontSize: 48
});
```

![Dimensions 64x128](./examples/dimensions-64x128.png)

## Google Web Fonts

Center.js will work with standard fonts as well as Google Web Fonts. Feel free to use any Google Web Fonts you've loaded via `<link>` tags. If you need to load Google Web Fonts dynamically then include the Web Font loader in your application as shown below.

```HTML
<script src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"></script>
```

```JavaScript
WebFont.load({
  google: {
    families: ["Aladin"]
  },
  active: function() {
    centerjs({
      canvas: document.getElementById("google-web-fonts-1"),
      width: 256,
      height: 128,
      shape: "rounded",
      fontColor: "white",
      backgroundColor: "#C70039",
      text: "canvas",
      fontFamily: "Aladin",
      fontSize: 80
    });
  }
});
```

![Google Web Fonts 1](./examples/google-web-fonts-1.png)
