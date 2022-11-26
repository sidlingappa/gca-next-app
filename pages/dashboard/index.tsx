import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid, Paper } from '@mui/material';
import styled from '@emotion/styled';
import {NextPage} from "next";
import NavBar from '../../components/navbar';

const Typography = styled(Paper) ({
  margin: 0.6,
  marginLeft: 0,
  marginRight: 0,
  fontSize: 15,
  padding: 5,
  borderRadius: 1,
  backgroundColor: '#a5247a',
  color: '#FFF',
  cursor: 'pointer',
});
const Item = styled(Paper) ({
  backgroundColor:'#00977b',
  textAlign: 'center',
  margin: 5,
  padding: 5,
  color: '#FFF',
});
 const Dashboard: NextPage &{ auth?: boolean } = () =>  {  
  return (
    <Box sx={{ flexGrow: 1 }}>
    <NavBar></NavBar>
      <Grid container sx={{marginTop: 10}} columns={{ xs: 4, sm: 8, md: 24 }}>
          <Grid xs={2} sm={4} md={4} lg={4}>
            <Item>
              <img width='99%' alt="test" src="images/emp-mangmt.png" />
              <Typography>Emp Management</Typography>
            </Item> 
          </Grid>
          <Grid xs={2} sm={4} md={4} lg={4}>
            <Item>
              <img width='99%' alt="test" src="images/client-mangmt.png" />
              <Typography>Client Management</Typography>
            </Item>
          </Grid>
          <Grid xs={2} sm={4} md={4} lg={4}>
            <Item>
              <img width='99%' alt="test" src="images/payrol-mangmt.png" />
              <Typography>Payroll Management</Typography>
            </Item> 
          </Grid>
          <Grid xs={2} sm={4} md={4} lg={4}>
            <Item>
              <img width='99%' alt="test" src="images/leave-mangmt.png" />
              <Typography>Leave Management</Typography>
            </Item> 
          </Grid>
          <Grid xs={2} sm={4} md={4} lg={4}>
            <Item>
              <img width='99%' alt="test" src="images/clocking-mangmt.png" />
              <Typography>Clocking Management</Typography>
            </Item> 
          </Grid>
          <Grid xs={2} sm={4} md={4} lg={4}>
            <Item>
              <img width='99%' alt="test" src="images/time-mangmt.png" />
              <Typography>Time Management</Typography>
            </Item> 
          </Grid>
          <Grid xs={2} sm={4} md={4} lg={4}>
            <Item>
              <img width='99%' alt="test" src="images/reporting.png" />
              <Typography>Reporting</Typography>
            </Item> 
          </Grid>
          <Grid xs={2} sm={4} md={4} lg={4}>
            <Item>
              <img width='99%' alt="test" src="images/support.png" />
              <Typography>Support</Typography>
            </Item> 
          </Grid>
          <Grid xs={2} sm={4} md={4} lg={4}>
            <Item>
              <img width='99%' alt="test" src="images/admin.png" />
              <Typography>Administration</Typography>
            </Item> 
          </Grid>
          <Grid xs={2} sm={4} md={4} lg={4}>
            <Item>
              <img width='99%' alt="test" src="images/incident-mangmt.png" />
              <Typography>Incident Management</Typography>
            </Item> 
          </Grid>
          <Grid xs={2} sm={4} md={4} lg={4}>
            <Item>
              <img width='99%' alt="test" src="images/approvals.png" />
              <Typography>Approvals</Typography>
            </Item> 
          </Grid>
          <Grid xs={2} sm={4} md={4} lg={4}>
            <Item>
              <img width='99%' alt="test" src="images/client-mangmt.png" />
              <Typography>Others</Typography>
            </Item> 
          </Grid>
      </Grid>
    </Box>
  );
}
Dashboard.auth = true
export default Dashboard