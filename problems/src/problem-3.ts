const countWordOccurrences = (str1: string, str2: string): void => {
  const splittedStr1 = str1?.split(" ");
  let count: number = 0;

  splittedStr1?.map((item) => {
    const itemLower: string = item?.toLowerCase();
    const str2Lower: string = str2?.toLowerCase();

    if (itemLower === str2Lower) count++;
  });

  console.log(count);
};
