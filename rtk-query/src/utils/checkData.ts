export const checkEmptyString = (string: string) => {
  const emptyCheckRex = /^\s*$/;
  return emptyCheckRex.test(string);
};
