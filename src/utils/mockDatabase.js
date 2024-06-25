// src/utils/mockDatabase.js

const STORAGE_KEY = 'kakujoe_db';

const initDB = () => {
  if (!localStorage.getItem(STORAGE_KEY)) {
    const initialData = {
      users: [],
      favorites: [],
      stores: [
        { id: 1, name: '高崎店', crowdedness: '混雑' },
        { id: 2, name: '草加店', crowdedness: '普通' },
        { id: 3, name: '小平店', crowdedness: '空いている' },
      ],
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(initialData));
  }
};

const getAll = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
};

const saveAll = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

const addUser = (user) => {
  const data = getAll();
  data.users.push(user);
  saveAll(data);
};

const addFavorite = (userId, storeId) => {
  const data = getAll();
  data.favorites.push({ userId, storeId });
  saveAll(data);
};

const updateStoreCrowdedness = (storeId, crowdedness) => {
  const data = getAll();
  const store = data.stores.find(s => s.id === storeId);
  if (store) {
    store.crowdedness = crowdedness;
    saveAll(data);
  }
};

const getUserFavorites = (userId) => {
  const data = getAll();
  return data.favorites.filter(fav => fav.userId === userId).map(fav => fav.storeId);
};

initDB();

export const db = {
  getAll,
  addUser,
  addFavorite,
  updateStoreCrowdedness,
  getUserFavorites,
};