function uniquePaths(height: number, width: number): number {
  if (height === 1 && width === 1) return 1;

  let currRow = Array(width).fill(1);

  for (let row = 1; row < height; row++) {
    for (let col = 1; col < width; col++) {
      currRow[col] += currRow[col - 1];
    }
  }

  return currRow[width - 1];
}
