import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActions, Button, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './OnlineOrder.css';

// 仮のデータ。実際のアプリケーションではAPIから取得します。
const fishData = [
  { id: 1, name: '鮮魚セット', price: 3000, origin: '三陸', image: 'https://example.com/fish1.jpg', stock: 10 },
  { id: 2, name: '鮭', price: 1500, origin: '北海道', image: 'https://example.com/fish2.jpg', stock: 20 },
  { id: 3, name: 'マグロ', price: 2000, origin: '千葉', image: 'https://example.com/fish3.jpg', stock: 5 },
];

function OnlineOrder() {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [deliveryMethod, setDeliveryMethod] = useState('');

  const addToCart = (fish) => {
    setCart([...cart, fish]);
  };

  const removeFromCart = (fishId) => {
    setCart(cart.filter(item => item.id !== fishId));
  };

  const filteredFish = fishData.filter(fish => 
    fish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    fish.origin.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className="online-order-container">
      <Typography variant="h4" component="h1" gutterBottom>
        オンライン注文
      </Typography>

      <TextField
        label="魚種や産地で検索"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <Grid container spacing={3}>
        {filteredFish.map((fish) => (
          <Grid item xs={12} sm={6} md={4} key={fish.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={fish.image}
                alt={fish.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {fish.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  価格: ¥{fish.price} | 産地: {fish.origin}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  在庫: {fish.stock}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => addToCart(fish)}>
                  <ShoppingCartIcon /> カートに追加
                </Button>
                <Button size="small">
                  <FavoriteIcon /> お気に入り
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" component="h2" gutterBottom style={{ marginTop: '2rem' }}>
        カート
      </Typography>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <Typography>{item.name} - ¥{item.price}</Typography>
          <Button onClick={() => removeFromCart(item.id)}>削除</Button>
        </div>
      ))}

      <FormControl fullWidth margin="normal">
        <InputLabel>配送日選択</InputLabel>
        <Select
          value={deliveryDate}
          onChange={(e) => setDeliveryDate(e.target.value)}
        >
          <MenuItem value="2024-06-26">2024年6月26日</MenuItem>
          <MenuItem value="2024-06-27">2024年6月27日</MenuItem>
          <MenuItem value="2024-06-28">2024年6月28日</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth margin="normal">
        <InputLabel>配送方法選択</InputLabel>
        <Select
          value={deliveryMethod}
          onChange={(e) => setDeliveryMethod(e.target.value)}
        >
          <MenuItem value="normal">通常配送</MenuItem>
          <MenuItem value="refrigerated">冷蔵配送</MenuItem>
        </Select>
      </FormControl>

      <Button variant="contained" color="primary" style={{ marginTop: '2rem' }}>
        注文を確定する
      </Button>
    </Container>
  );
}

export default OnlineOrder;