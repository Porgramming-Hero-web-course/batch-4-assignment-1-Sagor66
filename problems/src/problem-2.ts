const removeDuplicates = (numbers: number[]): void => {
  const newArray: number[] = [];

  numbers.map((item: number) => {
    if (!newArray.includes(item)) {
      newArray.push(item);
    }
  });

  console.log(newArray);
};
