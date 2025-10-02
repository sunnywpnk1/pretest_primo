const merge = (
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] => {
  const reversed_collection_3 = [...collection_3].reverse();
  const merged_1_2 = arrange(collection_1, collection_2);
  const finalResult = arrange(merged_1_2, reversed_collection_3);
  
  return finalResult;
};

const arrange = (arr1: number[], arr2: number[]): number[] => {
  const result: number[] = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    const val1 = arr1[i];
    const val2 = arr2[j];

    if (val1 !== undefined && val2 !== undefined) {
      if (val1 < val2) {
        result.push(val1);
        i++;
      } else {
        result.push(val2);
        j++;
      }
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
};

module.exports = { merge };
