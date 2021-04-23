function mouseClicked() {
  const clickPos = pxToPos(mouseX, mouseY);
  const clickChunk = posToChunk(clickPos);
  const idsInChunk = chunks[clickChunk];

  if (cursorMode === cursorModes.destroy) {
    for (let i = 0; i < idsInChunk.length; i++) {
      let curEntity = idTable[idsInChunk[i]];

      if (curEntity.pos.x === clickPos.x && curEntity.pos.y === clickPos.y) {
        console.log(
          "Clicked on " + curEntity.name + " (" + curEntity.clr + ") "
        );
        removeEntityById(curEntity.id);
        sEmit({ dtype: "removeEntity", id: curEntity.id });
      }
    }
  } else {
    let newEntId = createEntity(
      "new_name",
      clickPos,
      cursorModeColors[cursorMode]
    );
    sEmit({ dtype: "createEntity", ent: idTable[newEntId] });
    console.log(`Created new entity: ${idTable[newEntId].name} [${newEntId}]`);
  }
}

function keyPressed() {
  switch (keyCode) {
    case KC.N1:
      cursorMode = cursorModes.destroy;
      break;
    case KC.N2:
      cursorMode = cursorModes.green;
      break;
    case KC.N3:
      cursorMode = cursorModes.blue;
      break;
    default:
      break;
  }
}
