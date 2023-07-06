export default function magicWand (imageData: ImageData, px: number, py: number, threshold = 80): number[][] {
  const distance = (p1: number[], p2: number[], threshold: number): boolean => {
    let sum = 0;
    for (let i = 0; i < 4; i++) {
      sum += Math.abs(p1[i] - p2[i])
      if (sum > threshold) return false;
    }
    return true;
  }

  const d = imageData.data;
  const w = imageData.width;
  const h = imageData.height;
  const checked = new Set();
  const res = [[px, py]];
  const i = (py * w + px) * 4;
  const p0 = [d[i], d[i + 1], d[i + 2], d[i + 3]];

  const check = (x: number, y: number) => {
    if (checked.has(`${x},${y}`)) return
    checked.add(`${x},${y}`);

    const i = (y * w + x) * 4;
    if (distance(p0, [d[i], d[i + 1], d[i + 2], d[i + 3]], threshold)) {
      res.push([x, y])
    }
  }

  let index = 0
  while (index < res.length) {
    const [x, y] = res[index];
    
    if (y > 0) check(x, y - 1)
    if (x > 0) check(x - 1, y)
    if (x < w - 1) check(x + 1, y)
    if (y < h - 1) check(x, y + 1)
    index++;
  }

  return res;
}