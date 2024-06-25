// src/utils/mockDatabase.js

const STORAGE_KEY = 'kakujoe_db';

// データベースの初期化
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

// データの取得
const getAll = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY));
};

// データの保存
const saveAll = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

// ユーザーの追加
const addUser = (user) => {
  const data = getAll();
  data.users.push(user);
  saveAll(data);
};

// お気に入りの追加
const addFavorite = (userId, storeId) => {
  const data = getAll();
  data.favorites.push({ userId, storeId });
  saveAll(data);
};

// 店舗の混雑状況更新
const updateStoreCrowdedness = (storeId, crowdedness) => {
  const data = getAll();
  const store = data.stores.find(s => s.id === storeId);
  if (store) {
    store.crowdedness = crowdedness;
    saveAll(data);
  }
};

// データベースの初期化
initDB();

export const db = {
  getAll,
  addUser,
  addFavorite,
  updateStoreCrowdedness,
};