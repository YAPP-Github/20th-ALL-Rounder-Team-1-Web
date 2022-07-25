export const setStorage = (key: string, value: string) => {
  sessionStorage.setItem(key, value);
};

export const getStorage = (key: string) => {
  return sessionStorage.getItem(key);
};

export const deleteStorage = (key: string) => {
  sessionStorage.removeItem(key);
};
