import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          角上魚類
        </Typography>
        <Button color="inherit" component={Link} to="/">
          ホーム
        </Button>
        <Button color="inherit" component={Link} to="/ai-assistant">
          AIアシスタント
        </Button>
        <Button color="inherit" component={Link} to="/store-crowdedness">
          混雑状況
        </Button>
        <Button color="inherit" component={Link} to="/coupons">
          クーポン
        </Button>
        <Button color="inherit" component={Link} to="/account">
          アカウント
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;