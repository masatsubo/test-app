import React from 'react';
import { Typography, Container, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledHeroContent = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(8, 0, 6),
}));

const StyledCardGrid = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  paddingBottom: theme.spacing(8),
}));

const StyledCard = styled(Paper)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: theme.spacing(2),
}));

function Home() {
  return (
    <main>
      <StyledHeroContent>
        <Container maxWidth="sm">
          <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
            角上魚類へようこそ
          </Typography>
          <Typography variant="h5" align="center" color="textSecondary" paragraph>
            新鮮な魚介類と最高のサービスを提供します。AIアシスタント、混雑状況確認、お得なクーポンなど、便利な機能をご利用ください。
          </Typography>
        </Container>
      </StyledHeroContent>
      <StyledCardGrid maxWidth="md">
        <Grid container spacing={4}>
          {['本日のおすすめ', '季節の特選品', 'お客様の声'].map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <StyledCard>
                <Typography gutterBottom variant="h5" component="h2">
                  {card}
                </Typography>
                <Typography>
                  This is a media card. You can use this section to describe the content.
                </Typography>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </StyledCardGrid>
    </main>
  );
}

export default Home;