import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import { Home as HomeIcon, Chat as ChatIcon, Store as StoreIcon, LocalOffer as CouponIcon, Person as PersonIcon } from '@mui/icons-material';
import CssBaseline from '@mui/material/CssBaseline';
import { QueryClient, QueryClientProvider } from 'react-query';

import Home from './pages/Home';
import AIAssistant from './pages/AIAssistant';
import StoreCrowdedness from './pages/StoreCrowdedness';
import Coupons from './pages/Coupons';
import Account from './pages/Account';

const theme = createTheme({
  // テーマの設定
});

const queryClient = new QueryClient();

function App() {
  const [value, setValue] = React.useState(0);

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div style={{ paddingBottom: '56px' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ai-assistant" element={<AIAssistant />} />
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
              <BottomNavigationAction label="AI" icon={<ChatIcon />} component={Link} to="/ai-assistant" />
              <BottomNavigationAction label="混雑状況" icon={<StoreIcon />} component={Link} to="/store-crowdedness" />
              <BottomNavigationAction label="クーポン" icon={<CouponIcon />} component={Link} to="/coupons" />
              <BottomNavigationAction label="アカウント" icon={<PersonIcon />} component={Link} to="/account" />
            </BottomNavigation>
          </Paper>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;