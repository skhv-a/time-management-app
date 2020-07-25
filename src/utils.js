export const validation = (...arr) => {
  let isValid = false;
  arr.forEach((element) => {
    if (!element) {
      return (isValid = false);
    }
    return (isValid = true);
  });
  return isValid;
};

export const localStorageDataLoader = (sessionToken) => {
  localStorage.setItem('sessionToken', sessionToken);
};
