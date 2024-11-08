const validateKeys = <T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Boolean => {
  const allKeys = Object.keys(obj) as K[];
  let flag = true;

  keys?.map((item) => {
    if (!allKeys.includes(item)) {
      flag = false;
    }
  });
  return flag;
};
