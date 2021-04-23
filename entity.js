const idTable = {};

function getIdGenerator() {
  const init_id = 0;
  let free_id = init_id;

  function getNewId() {
    free_id += 1;
    return free_id;
  }
  return getNewId;
}

const getNewId = getIdGenerator();

function generateChunks() {
  for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 20; j++) {
      chunks[i + "_" + j] = [];
    }
  }
}
generateChunks();

function createEntity(name, pos, clr) {
  const id = getNewId();
  const entChunk = posToChunk(pos);
  const entity = { name, pos, clr, id, entChunk };
  addEntityToTables(entity);
  return id;
}

function addEntityToTables(ent) {
  chunks[ent.entChunk].push(ent.id);
  idTable[ent.id] = ent;
}

function removeEntityById(id) {
  const entity = idTable[id];
  idTable[id] = undefined;
  delete idTable[id];
  let index = chunks[entity.entChunk].indexOf(id);
  chunks[entity.entChunk].splice(index, 1);
}
