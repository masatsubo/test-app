import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Container, FormControl, InputLabel, Select, MenuItem, Checkbox, FormGroup, FormControlLabel, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const StyledForm = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: theme.spacing(1),
}));

const StyledSubmitButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(3, 0, 2),
}));

const stores = [
  { id: 1, name: '高崎店' },
  { id: 2, name: '草加店' },
  { id: 3, name: '小平店' },
];

function Account() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [favoriteStores, setFavoriteStores] = useState([]);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const storedUserInfo = localStorage.getItem('userInfo');
    if (storedUserInfo) {
      setUserInfo(JSON.parse(storedUserInfo));
      setIsRegistered(true);
    }
  }, []);

  const handleRegister = (e) => {
    e.preventDefault();
    const newUser = { userId, password, favoriteStores };
    localStorage.setItem('userInfo', JSON.stringify(newUser));
    setUserInfo(newUser);
    setIsRegistered(true);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
    if (storedUserInfo && storedUserInfo.userId === userId && storedUserInfo.password === password) {
      setUserInfo(storedUserInfo);
      setIsRegistered(true);
    } else {
      alert('ユーザーIDまたはパスワードが間違っています。');
    }
  };

  const handleLogout = () => {
    setUserInfo(null);
    setIsRegistered(false);
    setUserId('');
    setPassword('');
    setFavoriteStores([]);
  };

  if (isRegistered && userInfo) {
    return (
      <StyledContainer component="main" maxWidth="xs">
        <Typography component="h1" variant="h5">
          ユーザー情報
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="ユーザーID" secondary={userInfo.userId} />
          </ListItem>
          <ListItem>
            <ListItemText primary="お気に入り店舗" secondary={
              userInfo.favoriteStores.map(storeId => 
                stores.find(store => store.id === storeId)?.name
              ).join(', ')
            } />
          </ListItem>
        </List>
        <StyledSubmitButton
          fullWidth
          variant="contained"
          color="secondary"
          onClick={handleLogout}
        >
          ログアウト
        </StyledSubmitButton>
      </StyledContainer>
    );
  }

  return (
    <StyledContainer component="main" maxWidth="xs">
      <Typography component="h1" variant="h5">
        {isRegistered ? 'ログイン' : 'アカウント登録'}
      </Typography>
      <StyledForm onSubmit={isRegistered ? handleLogin : handleRegister}>
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="userId"
          label="ユーザーID"
          name="userId"
          autoComplete="username"
          autoFocus
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          label="パスワード"
          type="password"
          id="password"
          autoComplete="current-password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!isRegistered && (
          <FormControl fullWidth margin="normal">
            <InputLabel id="favorite-stores-label">お気に入り店舗</InputLabel>
            <Select
              labelId="favorite-stores-label"
              id="favorite-stores"
              multiple
              value={favoriteStores}
              onChange={(e) => setFavoriteStores(e.target.value)}
              renderValue={(selected) => selected.map(id => stores.find(store => store.id === id).name).join(', ')}
            >
              {stores.map((store) => (
                <MenuItem key={store.id} value={store.id}>
                  <Checkbox checked={favoriteStores.indexOf(store.id) > -1} />
                  {store.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
        <StyledSubmitButton
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
        >
          {isRegistered ? 'ログイン' : '登録'}
        </StyledSubmitButton>
      </StyledForm>
      <Button
        fullWidth
        variant="text"
        color="primary"
        onClick={() => setIsRegistered(!isRegistered)}
      >
        {isRegistered ? 'アカウント登録へ' : 'ログインへ'}
      </Button>
    </StyledContainer>
  );
}

export default Account;