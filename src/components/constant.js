export const TURNS = {
  x: '🟡',
  o: '🔴'
}

const generateWinnerCombos = () => {
  const combos = [];

  // Generar combos de filas
  for (let row = 0; row < 6; row++) {
    for (let col = 0; col < 4; col++) {
      const combo = [];
      for (let i = 0; i < 4; i++) {
        combo.push(row * 7 + col + i);
      }
      combos.push(combo);
    }
  }

  // Generar combos de columnas
  for (let col = 0; col < 7; col++) {
    for (let row = 0; row < 3; row++) {
      const combo = [];
      for (let i = 0; i < 4; i++) {
        combo.push(row * 7 + col + i * 7);
      }
      combos.push(combo);
    }
  }

  // Generar combos de diagonales ascendentes
  for (let col = 0; col < 4; col++) {
    for (let row = 0; row < 3; row++) {
      const combo = [];
      for (let i = 0; i < 4; i++) {
        combo.push((row + i) * 7 + col + i);
      }
      combos.push(combo);
    }
  }

  // Generar combos de diagonales descendentes
  for (let col = 0; col < 4; col++) {
    for (let row = 3; row < 6; row++) {
      const combo = [];
      for (let i = 0; i < 4; i++) {
        combo.push((row - i) * 7 + col + i);
      }
      combos.push(combo);
    }
  }

  return combos;
};

export const WINNER_COMBOS = generateWinnerCombos();

