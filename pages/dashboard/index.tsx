import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { ButtonBase, Grid, Paper } from '@mui/material';
import styled from '@emotion/styled';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor:  '#ccc',
  padding:5,
  textAlign: 'center',
  margin: 5,
 // padding: 0,
  color: '#333',
}));
export default function MenuAppBar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Photos
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <Grid container  columns={{ xs: 4, sm: 8, md: 16 }}>
          <Grid xs={2} sm={4} md={4} lg={4}>
            <Item>
              <img width='100%' alt="test" src="https://www.lifecell.in/media/newsletter/medias/media/robotic-process-automation.png" />
              <p>Test menu</p>
            </Item> 
          </Grid>
          <Grid xs={2} sm={4} md={4} lg={4}>
            <Item>
              <img width='100%' alt="test" src="https://www.lifecell.in/media/newsletter/medias/media/robotic-process-automation.png" />
              <p>Test menu</p>
            </Item> 
          </Grid>
          <Grid xs={2} sm={4} md={4} lg={4}>
            <Item>
              <img width='100%' alt="test" src="https://www.lifecell.in/media/newsletter/medias/media/robotic-process-automation.png" />
              <p>Test menu</p>
            </Item> 
          </Grid>
          <Grid xs={2} sm={4} md={4} lg={4}>
            <Item>
              <img width='100%' alt="test" src="https://www.lifecell.in/media/newsletter/medias/media/shutterstock_530884738_1_1_.jpg" />
              <p>Test menu</p>
            </Item> 
          </Grid>
          <Grid xs={2} sm={4} md={4} lg={4}>
            <Item>
              <img width='100%' alt="test" src="https://www.lifecell.in/media/newsletter/medias/media/shutterstock_1725021514_1.jpg" />
              <p>Test menu</p>
            </Item> 
          </Grid>
          <Grid xs={2} sm={4} md={4} lg={4}>
            <Item>
              <img width='100%' alt="test" src="https://www.lifecell.in/media/magefan_blog/1B2.jpg" />
              <p>Test menu</p>
            </Item> 
          </Grid>
          <Grid xs={2} sm={4} md={4} lg={4}>
            <Item>
              <img width='100%' alt="test" src="https://www.lifecell.in/media/magefan_blog/need_for_cordblood_banking_Mobile2.jpg" />
              <p>Test menu</p>
            </Item> 
          </Grid>
          <Grid xs={2} sm={4} md={4} lg={4}>
            <Item>
              <img width='100%' alt="test" src="https://www.lifecell.in/media/magefan_blog/Community_Banking_Overview_Mobile2.jpg" />
              <p>Test menu</p>
            </Item> 
          </Grid>
      </Grid>
    </Box>
  );
}
