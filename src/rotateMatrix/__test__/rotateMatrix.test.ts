import { rotateMatrix } from "../rotateMatrix";
describe("test suite", () => {
  it("rotate not square matrix should return error", () => {
    const grid = [
      [1, 2, 3],
      [4, 5, 6]
    ];
    try {
      rotateMatrix(grid, 1);
    } catch (error) {
      expect(error).toThrowError(new Error("Not square gird"));
    }
  });

  it("rotate with nagative number of rotation should return error", () => {
    const grid = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    try {
      rotateMatrix(grid, -1);
    } catch (error) {
      expect(error).toThrowError(new Error("Not accept negative number of rotations"));
    }

  });
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
    expect(result).toStrictEqual(expectResult);
  });
  it("rotate 2 times", () => {
    const grid = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const result = rotateMatrix(grid, 2);
    const expectResult = [
      [9, 8, 7],
      [6, 5, 4],
      [3, 2, 1]
    ];
    expect(result).toStrictEqual(expectResult);
  });
  it("rotate 3 times", () => {
    const grid = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    const result = rotateMatrix(grid, 3);
    const expectResult = [
      [3, 6, 9],
      [2, 5, 8],
      [1, 4, 7]
    ];
    expect(result).toStrictEqual(expectResult);
  });
});
