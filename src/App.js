import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { Home as HomeIcon, ShoppingCart as OrderIcon, Store as StoreIcon, LocalOffer as CouponIcon, Person as PersonIcon } from '@mui/icons-material';
import CssBaseline from '@mui/material/CssBaseline';

import Home from './pages/Home';
import OnlineOrder from './pages/OnlineOrder';
import StoreCrowdedness from './pages/StoreCrowdedness';
import Coupons from './pages/Coupons';
import Account from './pages/Account';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const [value, setValue] = React.useState(0);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div style={{ paddingBottom: '56px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order" element={<OnlineOrder />} />
            <Route path="/store-crowdedness" element={<StoreCrowdedness />} />
            <Route path="/coupons" element={<Coupons />} />
            <Route path="/account" element={<Account />} />
          </Routes>
        </div>
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            showLabels
          >
            <BottomNavigationAction label="ホーム" icon={<HomeIcon />} component={Link} to="/" />
            <BottomNavigationAction label="注文" icon={<OrderIcon />} component={Link} to="/order" />
            <BottomNavigationAction label="混雑状況" icon={<StoreIcon />} component={Link} to="/store-crowdedness" />
            <BottomNavigationAction label="クーポン" icon={<CouponIcon />} component={Link} to="/coupons" />
            <BottomNavigationAction label="アカウント" icon={<PersonIcon />} component={Link} to="/account" />
          </BottomNavigation>
        </Paper>
      </Router>
    </ThemeProvider>
  );
}

export default App;