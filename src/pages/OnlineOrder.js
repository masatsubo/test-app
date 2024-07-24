import React, { useState } from 'react';
import { Container, Typography, TextField, Button, List, ListItem, ListItemText, ListItemSecondaryAction, IconButton } from '@mui/material';
import { Delete as DeleteIcon } from '@mui/icons-material';

const OnlineOrder = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');

  const handleAddItem = () => {
    if (newItem.trim() !== '') {
      setItems([...items, { name: newItem, quantity: 1 }]);
      setNewItem('');
    }
  };

  const handleRemoveItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const handleSubmitOrder = () => {
    // ここで注文処理を行う（バックエンドAPIを呼び出すなど）
    console.log('Order submitted:', items);
    alert('注文が完了しました！');
    setItems([]);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" component="h1" gutterBottom>
        オンライン注文
      </Typography>
      <TextField
        fullWidth
        label="商品名"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleAddItem}>
        商品を追加
      </Button>
      <List>
        {items.map((item, index) => (
          <ListItem key={index}>
            <ListItemText primary={item.name} secondary={`数量: ${item.quantity}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveItem(index)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      {items.length > 0 && (
        <Button variant="contained" color="secondary" onClick={handleSubmitOrder}>
          注文を確定
        </Button>
      )}
    </Container>
  );
};

export default OnlineOrder;