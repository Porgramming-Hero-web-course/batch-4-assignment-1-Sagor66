const getProperty = <T, K extends keyof T>(data: T, dataKey: K): T[K] => {
  return data[dataKey];
};
