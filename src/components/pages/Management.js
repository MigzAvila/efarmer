import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import {  makeStyles} from '@material-ui/core';

import DoughnutChart from "../charts/cropPie";
import BarChart from "../charts/livestockBar";
import Controls from "../../components/Controls/Control";


const livestock = (


  <React.Fragment>
    <CardContent style={{backgroundColor:"teal", color:"white"}}>
    
      <Typography variant="h5" component="div">
       Total LiveStock : 5300
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        
      </Typography>
      
    </CardContent>
   
  </React.Fragment>
);


const crop = (
  <React.Fragment>
    <CardContent style={{backgroundColor:"teal", color:"white"}}>
      
      <Typography variant="h5" component="div">
       Total Crops : 6
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        
      </Typography>
      
    </CardContent>
   
  </React.Fragment>
);

const land = (
  <React.Fragment>
    <CardContent style={{backgroundColor:"teal", color:"white"}}>
      
      <Typography variant="h5" component="div">
       Land in Use : 100 acres
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        
      </Typography>
      
    </CardContent>
   
  </React.Fragment>
);

const sales = (
  <React.Fragment>
    <CardContent style={{backgroundColor:"teal", color:"white"}}>
      
      <Typography variant="h5" component="div">
       Monthly Sales : $20,000
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        
      </Typography>
      
    </CardContent>
   
  </React.Fragment>
);

const Item = styled(Paper)(({ theme }) => ({
  
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const useStyles = makeStyles(theme => ({
  
  buttons: {
      color:'white',
      backgroundColor:'#1E6738',

  }
}))


const management = () => {
  const classes = useStyles;

    return (
      <div >
        <h1 style={{ textAlign: "center" }}>E-Farmer - Data Management</h1>
        <br />
        
        {/* <Link to="/crop">
          <Controls.Button
            text="Crop"
            variant="outlined"
            className={classes.buttons}
                        
          />
        </Link>
        <Link to="/livestock">
          <Controls.Button
            text="Livestock"
            className={classes.buttons}
            variant="outlined"          
          />  
        </Link> */}
        
        {/* Data Management - Livestock and Crop Dashboard */}
        <Box sx={{ width: '100%' }}>
          <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            <Grid item xs={6}>
              <Box sx={{ minWidth: 75 }} >
                <Card variant="outlined">{livestock}</Card>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ minWidth: 75 }} >
                <Card variant="outlined">{crop}</Card>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ minWidth: 75 }} >
                <Card variant="outlined">{land}</Card>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Box sx={{ minWidth: 75 }} >
                <Card variant="outlined">{sales}</Card>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
         <Grid item xs={6}>
            <Item>
              <DoughnutChart />
            </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <BarChart />
          </Item>
        </Grid>
        </Grid>

      </div>
    );
  };
  
  export default management;
  