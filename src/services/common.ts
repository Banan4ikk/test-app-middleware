export const removeUndefinedObject = (data: object) => {
  const locData = data;
  Object.keys(locData).forEach(key => {
    // @ts-ignore
    if (locData[key] === undefined) {
      // @ts-ignore
      delete locData[key];
    }
  });
  return locData;
};
