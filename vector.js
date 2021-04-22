function cPos(x, y) {
  return { x, y };
}

function posToChunk(pos) {
  let cx = Math.trunc(pos.x / chunkSize);
  let cy = Math.trunc(pos.y / chunkSize);
  let cp = cx + "_" + cy;
  return cp;
}

function pxToPos(x, y) {
  let posx = Math.trunc(x / cellSize);
  let posy = Math.trunc(y / cellSize);
  return cPos(posx, posy);
}

function pxToChunk(x, y) {
  return posToChunk(pxToPos(x, y));
}
