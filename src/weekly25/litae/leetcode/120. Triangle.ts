function minimumTotal(triangle: number[][]): number {
  const sizeOfTriangle = triangle.length;

  for (let height = 0; height < sizeOfTriangle; height++) {
    let lengthOfRow = triangle[height].length;
    for (let width = 0; width < lengthOfRow; width++) {
      let minNumber = triangle[0][0];
      if (minNumber > triangle[height][width])
        minNumber = triangle[height][width];
    }
  }
}
