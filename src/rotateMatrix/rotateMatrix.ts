 export const rotateMatrix = (grid: number[][], numOfRotates: number): number[][]=> {
    const numOfRows = grid.length;
    console.log(numOfRows);
    if (numOfRows !== grid[0].length) throw new Error("Not square gird");
    if (numOfRotates < 0)
      throw new Error("Not accept negative number of rotations");
    const rotateTimes = numOfRotates % 4;

    const numOfCycles = Math.floor(numOfRows / 2);
    for (let cycle = 0; cycle < numOfCycles; cycle++) {
      // The offset from the current coordinates to the next coordinates.
      const offset = numOfRows - cycle - 1;
      // Loop through change pixel in a cycle.
      for (let index = 0; index < offset - cycle; index++) {
        let temp = grid[cycle][cycle + index];
        switch (rotateTimes) {
          case 0:
            break;
          case 1:
            grid[cycle][cycle + index] = grid[offset - index][cycle];
            grid[offset - index][cycle] = grid[offset][offset - index];
            grid[offset][offset - index] = grid[cycle + index][offset];
            grid[cycle + index][offset] = temp;
            break;
          case 2:
            grid[cycle][cycle + index] = grid[offset][offset - index];
            grid[offset][offset - index] = temp;
            temp = grid[cycle + index][offset];
            grid[cycle + index][offset] = grid[offset - index][cycle];
            grid[offset - index][cycle] = temp;
            break;
          case 3:
            grid[cycle][cycle + index] = grid[cycle + index][offset];
            grid[cycle + index][offset] = grid[offset][offset - index];
            grid[offset][offset - index] = grid[offset - index][cycle];
            grid[offset - index][cycle] = temp;
            break;
          default:
            break;
        }
      }
    }
    return grid;
  }
