const chunkSize = 4;
const cellSize = 24;

const chunks = {};

const KC = {
  N1: 49,
  N2: 50,
  N3: 51,
};

const cursorModes = { destroy: 0, green: 2, blue: 3 };
const cursorModeColors = { 0: "red", 2: "green", 3: "blue" };
