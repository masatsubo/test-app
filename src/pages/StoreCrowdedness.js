import React, { useState } from 'react';
import { Typography, Container, Grid, Paper, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useQuery } from 'react-query';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const StyledFormControl = styled(FormControl)(({ theme }) => ({
  margin: theme.spacing(1),
  minWidth: 120,
}));

// モックAPIコール
const fetchStoreCrowdedness = async () => {
  // 実際のAPI呼び出しをシミュレート
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    { id: 1, name: '高崎店', crowdedness: '混雑' },
    { id: 2, name: '草加店', crowdedness: '普通' },
    { id: 3, name: '小平店', crowdedness: '空いている' },
  ];
};

function StoreCrowdedness() {
  const [selectedStore, setSelectedStore] = useState('');

  const { data: stores, isLoading, error } = useQuery('storeCrowdedness', fetchStoreCrowdedness);

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>An error has occurred: {error.message}</Typography>;

  return (
    <StyledContainer>
      <Typography variant="h4" gutterBottom>
        店舗混雑状況
      </Typography>
      <StyledFormControl>
        <InputLabel>店舗を選択</InputLabel>
        <Select
          value={selectedStore}
          onChange={(e) => setSelectedStore(e.target.value)}
        >
          <MenuItem value="">
            <em>全店舗</em>
          </MenuItem>
          {stores.map((store) => (
            <MenuItem key={store.id} value={store.id}>{store.name}</MenuItem>
          ))}
        </Select>
      </StyledFormControl>
      <Grid container spacing={3}>
        {stores
          .filter(store => !selectedStore || store.id === selectedStore)
          .map((store) => (
          <Grid item xs={12} sm={6} md={4} key={store.id}>
            <StyledPaper>
              <Typography variant="h6">{store.name}</Typography>
              <Typography>混雑状況: {store.crowdedness}</Typography>
            </StyledPaper>
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );
}

export default StoreCrowdedness;