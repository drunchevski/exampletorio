createEntity("wow", cPos(0, 8), "green");
createEntity("nice", cPos(1, 1), "blue");
createEntity("noice", cPos(1, 3), "pink");

let cursorMode = 0;
const selection = [];

function entityHandler(data) {
  if (data.dtype === "removeEntity") {
    removeEntityById(data.id);
    return;
  }
  if (data.dtype === "createEntity") {
    addEntityToTables(data.ent);
    return;
  }
}

sockethandlers.push(entityHandler);

function setup() {
  let root = document.getElementById("canvasRoot");
  canv = createCanvas(root.offsetWidth, root.offsetHeight);
  canv.parent(root);
  noStroke();
}

function GUI() {
  const cursorModeColor = cursorModeColors[cursorMode];
  fill(cursorModeColor);
  rect(width - 100, height - 100, 80, 80);

  text(frameRate(), width - 100, height - 120);
}

function draw() {
  background(220);

  for (let chunkId in chunks) {
    for (let entityId of chunks[chunkId]) {
      const entity = idTable[entityId];
      fill(entity.clr);
      dRect(entity.pos.x, entity.pos.y);
    }
  }
  GUI();
}
