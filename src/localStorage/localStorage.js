export const saveDataToLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const loadDataFromLocalStorage = key => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};
