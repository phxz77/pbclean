const fs = require('fs');
const path = require('path');
const { PNG } = require('pngjs');
const jpeg = require('jpeg-js');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function gradientColor(colors, t) {
  const steps = colors.length - 1;
  const idx = Math.min(steps - 1, Math.floor(t * steps));
  const localT = (t - idx / steps) * steps;
  const [r1, g1, b1] = colors[idx];
  const [r2, g2, b2] = colors[idx + 1];
  return [
    Math.round(lerp(r1, r2, localT)),
    Math.round(lerp(g1, g2, localT)),
    Math.round(lerp(b1, b2, localT)),
  ];
}

function createImage(width, height, drawFn) {
  const data = Buffer.alloc(width * height * 4);
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const idx = (y * width + x) * 4;
      const [r, g, b, a] = drawFn(x, y, width, height);
      data[idx] = r;
      data[idx + 1] = g;
      data[idx + 2] = b;
      data[idx + 3] = a;
    }
  }
  return data;
}

function writePng(filePath, width, height, data) {
  const png = new PNG({ width, height });
  png.data = data;
  const buffer = PNG.sync.write(png);
  fs.writeFileSync(filePath, buffer);
}

function writeJpeg(filePath, width, height, data) {
  const rawImageData = {
    data,
    width,
    height,
  };
  const jpegImageData = jpeg.encode(rawImageData, 90);
  fs.writeFileSync(filePath, jpegImageData.data);
}

function makeGradientBackground(colors) {
  return (x, y, width, height) => {
    const t = (x / (width - 1) + y / (height - 1)) / 2;
    const [r, g, b] = gradientColor(colors, t);
    return [r, g, b, 255];
  };
}

function makeHeroImage() {
  const width = 1920;
  const height = 1080;
  const colors = [
    [10, 26, 58],
    [3, 51, 93],
    [16, 34, 68],
  ];
  const data = createImage(width, height, (x, y) => {
    const [r, g, b] = gradientColor(colors, Math.sqrt((x / width) * (y / height)));
    const wave = Math.sin((x / width) * Math.PI * 1.8 + (y / height) * Math.PI * 0.8);
    const factor = 0.92 + wave * 0.08;
    return [Math.round(r * factor), Math.round(g * factor), Math.round(b * factor), 255];
  });
  writeJpeg(path.join(__dirname, '../public/hero.jpg'), width, height, data);
}

function makeOgImage() {
  const width = 1200;
  const height = 630;
  const colors = [
    [10, 26, 58],
    [35, 80, 128],
    [233, 30, 36],
  ];
  const data = createImage(width, height, (x, y) => {
    const t = (x / width) * 0.6 + (y / height) * 0.4;
    const [r, g, b] = gradientColor(colors, t);
    const pattern = Math.sin((x / width) * Math.PI * 8) * Math.cos((y / height) * Math.PI * 8);
    const shade = 0.95 + pattern * 0.03;
    return [Math.round(r * shade), Math.round(g * shade), Math.round(b * shade), 255];
  });
  writeJpeg(path.join(__dirname, '../public/og-image.jpg'), width, height, data);
}

function makeAppleIcon() {
  const width = 180;
  const height = 180;
  const data = createImage(width, height, (x, y) => {
    const colors = [[10, 26, 58], [233, 30, 36]];
    const t = ((x - width / 2) ** 2 + (y - height / 2) ** 2) / ((width / 2) ** 2 + (height / 2) ** 2);
    const [r, g, b] = gradientColor(colors, clamp(t, 0, 1));
    const radius = Math.min(width, height) * 0.35;
    const dx = x - width / 2;
    const dy = y - height / 2;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const inCircle = dist < radius;
    if (inCircle) {
      return [255, 255, 255, 255];
    }
    return [r, g, b, 255];
  });
  writePng(path.join(__dirname, '../public/apple-touch-icon.png'), width, height, data);
}

function makeGalleryImage(name, width, height, baseColor, accentColor) {
  const data = createImage(width, height, (x, y) => {
    const t = y / height;
    const [r1, g1, b1] = baseColor;
    const [r2, g2, b2] = accentColor;
    const r = Math.round(lerp(r1, r2, t));
    const g = Math.round(lerp(g1, g2, t));
    const b = Math.round(lerp(b1, b2, t));
    const stripe = Math.abs(Math.sin((x / width) * Math.PI * 6 + (y / height) * Math.PI * 3));
    const shade = 0.92 + stripe * 0.08;
    return [Math.round(r * shade), Math.round(g * shade), Math.round(b * shade), 255];
  });
  writeJpeg(path.join(__dirname, `../public/${name}.jpg`), width, height, data);
}

ensureDir(path.join(__dirname, '../public'));

makeHeroImage();
makeOgImage();
makeAppleIcon();
makeGalleryImage('gallery-1-before', 1200, 800, [40, 75, 110], [80, 120, 170]);
makeGalleryImage('gallery-1-after', 1200, 800, [60, 110, 150], [120, 170, 210]);
makeGalleryImage('gallery-2-before', 1200, 800, [30, 50, 80], [90, 120, 155]);
makeGalleryImage('gallery-2-after', 1200, 800, [80, 120, 160], [140, 180, 210]);
makeGalleryImage('gallery-3-before', 1200, 800, [20, 40, 70], [100, 130, 170]);
makeGalleryImage('gallery-3-after', 1200, 800, [100, 140, 190], [180, 210, 230]);

console.log('Assets gerados com sucesso.');
