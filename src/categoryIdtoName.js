import { store } from "./store";

export const categoryIdtoName = (id) => {
  const category = [...store.getState().category];
  const findedCategory = category.find((item) => item.id === id);
  return findedCategory ? findedCategory.name : "Unknown";
};
