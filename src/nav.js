import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import {Link} from "react-router-dom"
// import Formpage from './newone';


function MyApp() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    
    <div className=''>
    <div className='' >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Muthayammal Engineering College
          </Typography>
          <Button color="inherit">ECR</Button>
          <Button color="inherit">Sesta</Button>
          <Button color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Setaf
          </Button>
        <Menu className='col-md-10 col-sm-12'
            id="simple-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}><span style={{maxWidth:'1000px'}}><img/><Link style={{textDecoration:'none', color:'black'}} to="/form">STUDENT MOTIVATION FOR PAPER PRESENTATION, PROJECT SUBMISSION AND OTHER CONTEST</Link></span></MenuItem>
            <MenuItem onClick={handleClose}>COLLABORATIVE ACTIVITIES,MoU SIGNED INSTITUTIONS AND INDUSTRIES</MenuItem>
            <MenuItem onClick={handleClose}>NPTEL CERTIFICATIONS</MenuItem>
          </Menu>
          <Button color="inherit">IV</Button>
        </Toolbar>
      </AppBar>
    </div>
    </div>
  );
}

export default MyApp;











