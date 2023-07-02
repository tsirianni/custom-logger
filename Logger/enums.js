module.exports = Object.seal({
  LEVELS: {
    ['info']: 1,
    ['warn']: 2,
    ['debug']: 3,
    ['error']: 4,
  },

  // ANSI
  LEVEL_TO_COLOR: {
    1: '\u001b[36m', // Cyan
    2: '\u001b[33m', // Yellow
    3: '\u001b[32;1m ', // Green
    4: '\u001b[31m', // Red
  },

  MESSAGE_COLOR: '\u001b[37m', // White
});
