const sumArray = (numbers: number[]): void => {
  const sum = numbers.reduce((acc: number, cur: number) => {
    return acc + cur;
  });

  console.log(sum);
};
