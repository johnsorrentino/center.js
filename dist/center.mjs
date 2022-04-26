class $ab4e1cafa3bfd981$var$CenterJS {
    generate(options) {
        this.ctx = this.canvas.getContext("2d");
        /**
     * Set defaults.
     */ const defaults = {
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
     */ this.data = Object.assign({}, defaults, options);
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
    drawBackground() {
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
    drawSquare() {
        this.ctx.beginPath();
        this.ctx.rect(0, 0, this.width, this.height);
        this.ctx.fillStyle = this.backgroundColor;
        this.ctx.fill();
    }
    drawCircle() {
        this.ctx.beginPath();
        this.ctx.arc(this.width / 2, this.height / 2, this.height / 2, 0, 2 * Math.PI, false);
        this.ctx.fillStyle = this.backgroundColor;
        this.ctx.fill();
    }
    drawRounded() {
        this.ctx.beginPath();
        const radius = this.height / 10;
        this.ctx.moveTo(this.width, this.height);
        this.ctx.arcTo(0, this.height, 0, 0, radius);
        this.ctx.arcTo(0, 0, this.width, 0, radius);
        this.ctx.arcTo(this.width, 0, this.width, this.height, radius);
        this.ctx.arcTo(this.width, this.height, 0, this.height, radius);
        this.ctx.fillStyle = this.backgroundColor;
        this.ctx.fill();
    }
    drawText() {
        this.ctx.fillStyle = this.fontColor;
        this.ctx.font = this.fontString();
        this.ctx.textBaseline = "alphabetic";
        this.ctx.textAlign = "center";
        const offsets = this.measureOffsets(this.text, this.fontFamily, this.fontSize);
        const x = this.width / 2 + offsets.horizontal;
        const y = this.height / 2 + offsets.vertical;
        this.ctx.fillText(this.text, x, y);
    }
    /**
   * Offsets are the differece between the center of the canvas and the center
   * of the text on the canvas.
   */ measureOffsets(text, fontFamily, fontSize) {
        /**
     * Create and setup canvas
     */ const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
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
     */ const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        let textTop;
        let textBottom;
        for(let y = 0; y <= canvas.height; y++)for(let x = 0; x <= canvas.width; x++){
            let r_index = 4 * (canvas.width * y + x);
            let r_value = data[r_index];
            if (r_value === 255) {
                if (!textTop) textTop = y;
                textBottom = y;
                break;
            }
        }
        /**
     * Vertical offset is the difference between the horizontal center of the
     * canvas and the horizontal center of the text on the canvas.
     */ const canvasHorizontalCenterLine = canvas.height / 2;
        const textHorizontalCenterLine = (textBottom - textTop) / 2 + textTop;
        let textLeft;
        let textRight;
        for(let x1 = 0; x1 <= canvas.width; x1++)for(let y1 = 0; y1 <= canvas.height; y1++){
            let r_index = 4 * (canvas.width * y1 + x1);
            let r_value = data[r_index];
            if (r_value === 255) {
                if (!textLeft) textLeft = x1;
                textRight = x1;
                break;
            }
        }
        /**
     * Horizontal offset is the difference between the vertical center of the
     * canvas and the vertical center of the text on the canvas.
     */ const canvasVerticalCenterLine = canvas.width / 2;
        const textVerticalCenterLine = (textRight - textLeft) / 2 + textLeft;
        return {
            vertical: canvasHorizontalCenterLine - textHorizontalCenterLine,
            horizontal: canvasVerticalCenterLine - textVerticalCenterLine
        };
    }
    fontString() {
        return `${this.fontStyle} ${this.fontWeight} ${this.fontSize}px ${this.fontFamily}`;
    }
    constructor(canvas){
        this.canvas = canvas;
    }
}
var $ab4e1cafa3bfd981$export$2e2bcd8739ae039 = $ab4e1cafa3bfd981$var$CenterJS;


export {$ab4e1cafa3bfd981$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=center.mjs.map
