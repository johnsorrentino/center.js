var $2d8XG$swchelpers = require("@swc/helpers");

function $parcel$defineInteropFlag(a) {
  Object.defineProperty(a, '__esModule', {value: true, configurable: true});
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$defineInteropFlag(module.exports);

$parcel$export(module.exports, "default", function () { return $c5a7332a225138d2$export$2e2bcd8739ae039; });

var $c5a7332a225138d2$var$CenterJS = /*#__PURE__*/ function() {
    "use strict";
    function $c5a7332a225138d2$var$CenterJS(options) {
        $2d8XG$swchelpers.classCallCheck(this, $c5a7332a225138d2$var$CenterJS);
        this.options = options;
    }
    $2d8XG$swchelpers.createClass($c5a7332a225138d2$var$CenterJS, [
        {
            key: "generate",
            value: function generate() {
                /**
     * Set defaults.
     */ var defaults = {
                    canvas: document.createElement("canvas"),
                    width: 128,
                    height: 128,
                    text: "C",
                    fontColor: "white",
                    fontFamily: "Helvetica",
                    fontSize: 64,
                    fontWeight: "400",
                    fontStyle: "normal",
                    shape: "square",
                    backgroundColor: "black"
                };
                /**
     * Override defaults with options.
     */ this.data = Object.assign({}, defaults, this.options);
                this.canvas = this.data.canvas;
                this.ctx = this.data.canvas.getContext("2d");
                this.width = this.data.width;
                this.height = this.data.height;
                this.text = this.data.text;
                this.fontColor = this.data.fontColor;
                this.fontFamily = this.data.fontFamily;
                this.fontSize = this.data.fontSize;
                this.fontWeight = this.data.fontWeight;
                this.fontStyle = this.data.fontStyle;
                this.shape = this.data.shape;
                this.backgroundColor = this.data.backgroundColor;
                /**
     * Set the width and height of the canvas as 2x of the desired width and
     * height. Use the style attribute of the canvas to set the desired width
     * and height of the canvas then scale the content up by a factor of 2. This
     * will allow support for retina displays.
     */ this.canvas.width = 2 * this.width;
                this.canvas.height = 2 * this.height;
                this.canvas.style.width = this.width + "px";
                this.canvas.style.height = this.height + "px";
                this.ctx.scale(2, 2);
                /**
     * Draw and return the canvas.
     */ this.drawBackground();
                this.drawText();
                return this.canvas;
            }
        },
        {
            key: "drawBackground",
            value: function drawBackground() {
                switch(this.shape){
                    case "square":
                        this.drawSquare();
                        break;
                    case "circle":
                        this.drawCircle();
                        break;
                    case "rounded":
                        this.drawRounded();
                        break;
                    default:
                        this.drawSquare();
                        break;
                }
            }
        },
        {
            key: "drawSquare",
            value: function drawSquare() {
                this.ctx.beginPath();
                this.ctx.rect(0, 0, this.width, this.height);
                this.ctx.fillStyle = this.backgroundColor;
                this.ctx.fill();
            }
        },
        {
            key: "drawCircle",
            value: function drawCircle() {
                this.ctx.beginPath();
                this.ctx.arc(this.width / 2, this.height / 2, this.height / 2, 0, 2 * Math.PI, false);
                this.ctx.fillStyle = this.backgroundColor;
                this.ctx.fill();
            }
        },
        {
            key: "drawRounded",
            value: function drawRounded() {
                this.ctx.beginPath();
                var radius = this.height / 10;
                this.ctx.moveTo(this.width, this.height);
                this.ctx.arcTo(0, this.height, 0, 0, radius);
                this.ctx.arcTo(0, 0, this.width, 0, radius);
                this.ctx.arcTo(this.width, 0, this.width, this.height, radius);
                this.ctx.arcTo(this.width, this.height, 0, this.height, radius);
                this.ctx.fillStyle = this.backgroundColor;
                this.ctx.fill();
            }
        },
        {
            key: "drawText",
            value: function drawText() {
                this.ctx.fillStyle = this.fontColor;
                this.ctx.font = this.fontString();
                this.ctx.textBaseline = "alphabetic";
                this.ctx.textAlign = "center";
                var offsets = this.measureOffsets(this.text, this.fontFamily, this.fontSize);
                var x = this.width / 2 + offsets.horizontal;
                var y = this.height / 2 + offsets.vertical;
                this.ctx.fillText(this.text, x, y);
            }
        },
        {
            /**
   * Offsets are the differece between the center of the canvas and the center
   * of the text on the canvas.
   */ key: "measureOffsets",
            value: function measureOffsets(text, fontFamily, fontSize) {
                /**
     * Create and setup canvas
     */ var canvas = document.createElement("canvas");
                var ctx = canvas.getContext("2d");
                ctx.font = this.fontString();
                /**
     * Make sure that there is enough room on the canvas for the text. Changing
     * the width or height of a canvas element clears the content so you need
     * to set the font again.
     */ canvas.width = 2 * ctx.measureText(text).width;
                canvas.height = 2 * fontSize;
                /**
     * Center the text vertically and horizontally using the build in canvas
     * functionality (textBaseline and textAlign). We're going to measure how
     * far off the text is from the actual center since the textBaseline and
     * textAlign are not always accurate.
     */ ctx.font = this.fontString();
                ctx.textBaseline = "alphabetic";
                ctx.textAlign = "center";
                ctx.fillStyle = "white";
                ctx.fillText(text, canvas.width / 2, canvas.height / 2);
                /**
     * Get image data so that we can iterate of every RGBA pixel.
     */ var data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
                var textTop;
                var textBottom;
                for(var y = 0; y <= canvas.height; y++)for(var x = 0; x <= canvas.width; x++){
                    var r_index = 4 * (canvas.width * y + x);
                    var r_value = data[r_index];
                    if (r_value === 255) {
                        if (!textTop) textTop = y;
                        textBottom = y;
                        break;
                    }
                }
                /**
     * Vertical offset is the difference between the horizontal center of the
     * canvas and the horizontal center of the text on the canvas.
     */ var canvasHorizontalCenterLine = canvas.height / 2;
                var textHorizontalCenterLine = (textBottom - textTop) / 2 + textTop;
                var textLeft;
                var textRight;
                for(var x1 = 0; x1 <= canvas.width; x1++)for(var y1 = 0; y1 <= canvas.height; y1++){
                    var r_index1 = 4 * (canvas.width * y1 + x1);
                    var r_value1 = data[r_index1];
                    if (r_value1 === 255) {
                        if (!textLeft) textLeft = x1;
                        textRight = x1;
                        break;
                    }
                }
                /**
     * Horizontal offset is the difference between the vertical center of the
     * canvas and the vertical center of the text on the canvas.
     */ var canvasVerticalCenterLine = canvas.width / 2;
                var textVerticalCenterLine = (textRight - textLeft) / 2 + textLeft;
                return {
                    vertical: canvasHorizontalCenterLine - textHorizontalCenterLine,
                    horizontal: canvasVerticalCenterLine - textVerticalCenterLine
                };
            }
        },
        {
            key: "fontString",
            value: function fontString() {
                return "".concat(this.fontStyle, " ").concat(this.fontWeight, " ").concat(this.fontSize, "px ").concat(this.fontFamily);
            }
        }
    ]);
    return $c5a7332a225138d2$var$CenterJS;
}();
var $c5a7332a225138d2$export$2e2bcd8739ae039 = $c5a7332a225138d2$var$CenterJS;


//# sourceMappingURL=center.js.map
