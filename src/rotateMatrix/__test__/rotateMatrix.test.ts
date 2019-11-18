import {rotateMatrix }from "../rotateMatrix";

describe("test suite", () => {
  it("rotate 1 time", () => {
    const grid = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const result = rotateMatrix(grid, 1);
    const expectResult = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3]
    ];
    expect(result).toBe(expectResult);
  });

  it("rotate 2 time", () => {
    const grid = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const result = rotateMatrix(grid, 1);
    const expectResult = [
      [9, 8, 7],
      [6, 5, 4],
      [3, 2, 1]
    ];
    expect(result).toBe(expectResult);
  });
  it("rotate 3 time", () => {
    const grid = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const result = rotateMatrix(grid, 1);
    const expectResult = [
      [3, 6, 9],
      [2, 5, 8],
      [1, 4, 7]
    ];
    expect(result).toBe(expectResult);
  });
});
