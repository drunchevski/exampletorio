const dRect = (x, y, w = 1, h = 1) => {
  rect(x * cellSize, y * cellSize, w * cellSize, h * cellSize);
};

const drawArea = (area, color) => {
  fill(color);
  area.map((a) => dRect(a.x, a.y));
};
