import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { ButtonBase, Grid, Paper } from '@mui/material';
import styled from '@emotion/styled';
import {NextPage} from "next";



const Item = styled(Paper)(({ theme }) => ({

  backgroundColor:  '#ccc',
  padding:5,
  textAlign: 'center',
  margin: 5,
 // padding: 0,
  color: '#333',
}));
 const Dashboard: NextPage &{ auth?: boolean } = () =>  {
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
      <Grid container  columns={{ xs: 4, sm: 8, md: 24 }}>
          <Grid xs={2} sm={4} md={4} lg={4}>
            <Item>
              <img width='90%' alt="test" src="images/emp-mangmt.png" />
              <p>Emp Management</p>
            </Item> 
          </Grid>
          <Grid xs={2} sm={4} md={4} lg={4}>
            <Item>
              <img width='90%' alt="test" src="images/client-mangmt.png" />
              <p>Client Management</p>
            </Item>
          </Grid>
          <Grid xs={2} sm={4} md={4} lg={4}>
            <Item>
              <img width='90%' alt="test" src="images/payrol-mangmt.png" />
              <p>Payroll Management</p>
            </Item> 
          </Grid>
          <Grid xs={2} sm={4} md={4} lg={4}>
            <Item>
              <img width='90%' alt="test" src="images/leave-mangmt.png" />
              <p>Leave Management</p>
            </Item> 
          </Grid>
          <Grid xs={2} sm={4} md={4} lg={4}>
            <Item>
              <img width='90%' alt="test" src="images/clocking-mangmt.png" />
              <p>Clocking Management</p>
            </Item> 
          </Grid>
          <Grid xs={2} sm={4} md={4} lg={4}>
            <Item>
              <img width='90%' alt="test" src="images/time-mangmt.png" />
              <p>Time Management</p>
            </Item> 
          </Grid>
          <Grid xs={2} sm={4} md={4} lg={4}>
            <Item>
              <img width='90%' alt="test" src="images/reporting.png" />
              <p>Reporting</p>
            </Item> 
          </Grid>
          <Grid xs={2} sm={4} md={4} lg={4}>
            <Item>
              <img width='90%' alt="test" src="images/support.png" />
              <p>Support</p>
            </Item> 
          </Grid>
          <Grid xs={2} sm={4} md={4} lg={4}>
            <Item>
              <img width='90%' alt="test" src="images/admin.png" />
              <p>Administration</p>
            </Item> 
          </Grid>
          <Grid xs={2} sm={4} md={4} lg={4}>
            <Item>
              <img width='90%' alt="test" src="images/incident-mangmt.png" />
              <p>Incident Management</p>
            </Item> 
          </Grid>
          <Grid xs={2} sm={4} md={4} lg={4}>
            <Item>
              <img width='90%' alt="test" src="images/approvals.png" />
              <p>Approvals</p>
            </Item> 
          </Grid>
          <Grid xs={2} sm={4} md={4} lg={4}>
            <Item>
              <img width='90%' alt="test" src="images/client-mangmt.png" />
              <p>Others</p>
            </Item> 
          </Grid>
      </Grid>
    </Box>
  );
}
Dashboard.auth = true
export default Dashboard