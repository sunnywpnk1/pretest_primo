const { merge } = require("../src/merge");

describe("merge function", () => {
  it("should handle all zeros", () => {
    const collection_1 = [0, 0, 0];
    const collection_2 = [0, 0];
    const collection_3 = [0];
    const expected = [0, 0, 0, 0, 0, 0];

    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  it("should correctly merge three sorted collections", () => {
    const collection_1 = [1];
    const collection_2 = [2];
    const collection_3 = [1];
    const expected = [1, 1, 2];

    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  it("should handle empty collections", () => {
    const collection_1: number[] = [];
    const collection_2 = [2];
    const collection_3 = [1];
    const expected = [1, 2];

    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  it("should return an empty array when all collections are empty", () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3: number[] = [];
    const expected: number[] = [];

    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  it("should handle negative numbers", () => {
    const collection_1 = [-5, -3, -1];
    const collection_2 = [-4, -2, 0];
    const collection_3 = [5, 3, 1];
    const expected = [-5, -4, -3, -2, -1, 0, 1, 3, 5];

    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  it("should handle all negative numbers", () => {
    const collection_1 = [-100, -50, -10];
    const collection_2 = [-90, -40];
    const collection_3 = [-5, -30, -80];
    const expected = [-100, -90, -80, -50, -40, -30, -10, -5];

    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  it("should handle collections of different lengths", () => {
    const collection_1: number[] = [];
    const collection_2 = [1];
    const collection_3: number[] = [];
    const expected = [1];

    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  it("should handle duplicate numbers across collections", () => {
    const collection_1 = [1, 1, 1];
    const collection_2 = [1, 1];
    const collection_3 = [1, 1];
    const expected = [1, 1, 1, 1, 1, 1, 1];

    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  it("should handle collections with very different sizes", () => {
    const collection_1 = [1, 3, 5, 7, 9, 11, 13, 15];
    const collection_2 = [2];
    const collection_3 = [10, 8];
    const expected = [1, 2, 3, 5, 7, 8, 9, 10, 11, 13, 15];

    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  it("should handle same numbers in all collections", () => {
    const collection_1 = [5, 10];
    const collection_2 = [5, 10];
    const collection_3 = [10, 5];
    const expected = [5, 5, 5, 10, 10, 10];

    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  it("should handle decimal numbers", () => {
    const collection_1 = [1.1, 2.2, 3.3];
    const collection_2 = [1.5, 2.5];
    const collection_3 = [3.0, 2.0];
    const expected = [1.1, 1.5, 2.0, 2.2, 2.5, 3.0, 3.3];

    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  it("should handle very large numbers", () => {
    const collection_1 = [1000000, 2000000];
    const collection_2 = [1500000];
    const collection_3 = [3000000, 500000];
    const expected = [500000, 1000000, 1500000, 2000000, 3000000];

    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  it("should handle only collection_3 having data", () => {
    const collection_1: number[] = [];
    const collection_2: number[] = [];
    const collection_3 = [5, 3, 1];
    const expected = [1, 3, 5];

    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  it("should handle very close numbers", () => {
    const collection_1 = [1.001, 1.002];
    const collection_2 = [1.0015];
    const collection_3 = [1.0025, 1.0005];
    const expected = [1.0005, 1.001, 1.0015, 1.002, 1.0025];

    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });

  it("should handle Infinity values", () => {
    const collection_1 = [-Infinity, 0, Infinity];
    const collection_2 = [5];
    const collection_3 = [10, -10];
    const expected = [-Infinity, -10, 0, 5, 10, Infinity];

    expect(merge(collection_1, collection_2, collection_3)).toEqual(expected);
  });
});
