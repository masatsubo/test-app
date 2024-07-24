import React from 'react';
import { Typography, Container, Grid, Card, CardContent, CardActions, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useQuery } from 'react-query';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const StyledCard = styled(Card)({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
});

const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
});

// モックAPIコール
const fetchCoupons = async () => {
  // 実際のAPI呼び出しをシミュレート
  await new Promise(resolve => setTimeout(resolve, 1000));
  return [
    { id: 1, title: '鮮魚10%オフ', description: '本日の鮮魚全品10%オフ', expiry: '2024-07-31' },
    { id: 2, title: '刺身盛り合わせ500円引き', description: '2人前以上のご注文で500円引き', expiry: '2024-06-30' },
    { id: 3, title: 'サーモン祭り', description: 'サーモン関連商品20%オフ', expiry: '2024-08-15' },
  ];
};

function Coupons() {
  const { data: coupons, isLoading, error } = useQuery('coupons', fetchCoupons);

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>An error has occurred: {error.message}</Typography>;

  return (
    <StyledContainer>
      <Typography variant="h4" gutterBottom>
        お得なクーポン
      </Typography>
      <Grid container spacing={4}>
        {coupons.map((coupon) => (
          <Grid item key={coupon.id} xs={12} sm={6} md={4}>
            <StyledCard>
              <StyledCardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {coupon.title}
                </Typography>
                <Typography>
                  {coupon.description}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  有効期限: {coupon.expiry}
                </Typography>
              </StyledCardContent>
              <CardActions>
                <Button size="small" color="primary">
                  クーポンを使用
                </Button>
              </CardActions>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </StyledContainer>
  );
}

export default Coupons;