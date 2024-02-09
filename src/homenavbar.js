import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Menu, MenuItem } from '@mui/material';
import Formpage from './newone';
// import Formpage from './newone';


const MyApp=()=>{
  const [anchorEl, setAnchorEl] = useState(null);

  const[views,setViews]=useState(false)

  // const [setafsubtype, setsetafsubtype]=useState({
  //   "subtype":""
  // })
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


//   const myCollect=(eve)=>{
//     eve.preventDefault()
//     const{name,value}=eve.target
//     setsetafsubtype((exists)=>{

//         return{
//             ...exists,
//             [name]:value
//         }
//     })
// }
  
const Condition=(eve)=>{
  //alert("fun called")
  alert(eve.target.id)
  const{id}=eve.target.id
  if(id==="motivation"){
    setViews(true)
  }
  //console.log(views)
}

  return (
    <>
    {
      (views)?<>
      <Formpage/>
      </>:
      <>
      <div className=''>
    <div className='' >
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Muthayammal Engineering College
          </Typography>
          <Button color="inherit">ECR</Button>
          <Button color="inherit">Sesta</Button>
          <Button color="inherit"  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Setaf
          </Button>
          <Menu
            id="subtype"
            name="subtype"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            // onChange={myCollect}
          >
            <MenuItem id="motivation" value='motivation' href='/Formpage' onChange={Condition}>Item 1</MenuItem>
            <MenuItem className='Item2' onClick={handleClose}>Item 2</MenuItem>
            <MenuItem  className='Item3' onClick={handleClose}>Item 3</MenuItem>
          </Menu> 
        </Toolbar>
        </AppBar>
       
    </div>
    </div>
      </>
    }
    </>
  );
}

export default MyApp;