// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import logo from './logo.jpg';
// import Stack from '@mui/material/Stack';
// import { Menu, MenuItem } from '@mui/material';

// export default function ButtonAppBar() { 

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="fixed">
//         <Toolbar>
//           <img src={logo} style={{width:"75px", marginLeft:"-25px"}}/>
//           <Typography variant="h6" className='text-center' component="div" sx={{ flexGrow: 1 }}>
//             MUTHAYAMMAL ENGINEERING COLLEGE<br/>(An Autonomous Institution)
//           </Typography>
//           <Stack spacing={2} direction="row">
//                 <Button variant="contained" color='info'>ECR</Button>
//                 <Button variant="contained" color='info'>SETAF</Button>
//                 <Button variant="contained" color='info'>SESTA</Button>
//                 <Button variant="contained" color='error'>LOGOUT</Button>                
//           </Stack>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }


// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import logo from './logo.jpg';
// import Stack from '@mui/material/Stack';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import { Link } from 'react-router-dom';

// export default function ButtonAppBar() {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="fixed">
//         <Toolbar>
//           <img src={logo} style={{width:"75px", marginLeft:"-25px"}}/>
//           <Typography variant="h6" className='text-center' component="div" sx={{ flexGrow: 1 }}>
//             MUTHAYAMMAL ENGINEERING COLLEGE<br/>(An Autonomous Institution)
//           </Typography>
//           <Stack spacing={2} direction="row">
//             <Button variant="contained" color='info'>ECR</Button>
//             <Button variant="contained" color='info' onClick={handleClick}>SETAF</Button>
//             <Menu
//               id="simple-menu"
//               anchorEl={anchorEl}
//               keepMounted
//               open={Boolean(anchorEl)}
//               onClose={handleClose}
//             >
              
//               <MenuItem onClick={handleClose}><Link to="/student_motivation" style={{color:"black", textDecoration:"none"}}>Student Motivation for Paper Presentations,Project Submission,Other Contest</Link></MenuItem>
//               <MenuItem onClick={handleClose}>Professional Society Membership</MenuItem>
//               <MenuItem onClick={handleClose}>Students Field Work Internship Guidance</MenuItem>
//             </Menu>
//             <Button variant="contained" color='info'>SESTA</Button>
//             <Button variant="contained" color='error'>LOGOUT</Button>                
//           </Stack>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import logo from './logo.jpg';
// import Stack from '@mui/material/Stack';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import { useHistory } from '@mui/icons-material';
// // import { History } from '@mui/icons-material';

// export default function ButtonAppBar() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const history = useHistory();

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   const handleJournalPublicationsClick = () => {
//     history.push("/journal-publications");
//     handleClose();
//   };

//   const handleConferencePublicationsClick = () => {
//     history.push("/conference-publications");
//     handleClose();
//   };

//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="fixed">
//         <Toolbar>
//           <img src={logo} style={{width:"75px", marginLeft:"-25px"}}/>
//           <Typography variant="h6" className='text-center' component="div" sx={{ flexGrow: 1 }}>
//             MUTHAYAMMAL ENGINEERING COLLEGE<br/>(An Autonomous Institution)
//           </Typography>
//           <Stack spacing={2} direction="row">
//             <Button variant="contained" color='info'>ECR</Button>
//             <Button variant="contained" color='info' onClick={handleClick}>SETAF</Button>
//             <Menu
//               id="simple-menu"
//               anchorEl={anchorEl}
//               keepMounted
//               open={Boolean(anchorEl)}
//               onClose={handleClose}
//             >
//               <MenuItem onClick={handleJournalPublicationsClick}>Journal Publications</MenuItem>
//               <MenuItem onClick={handleConferencePublicationsClick}>Conference Publications and Presentations</MenuItem>
//             </Menu>
//             <Button variant="contained" color='info'>SESTA</Button>
//             <Button variant="contained" color='error'>LOGOUT</Button>                
//           </Stack>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }



// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import logo from './logo.jpg';
// import Stack from '@mui/material/Stack';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import { Link } from 'react-router-dom';
// import { BrowserRouter as Router } from 'react-router-dom';

// export default function ButtonAppBar() {
//   const [anchorEl, setAnchorEl] = React.useState(null);

//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <Router>
//       <Box sx={{ flexGrow: 1 }}>
//         <AppBar position="fixed">
//           <Toolbar>
//             <img src={logo} style={{width:"75px", marginLeft:"-25px"}}/>
//             <Typography variant="h6" className='text-center' component="div" sx={{ flexGrow: 1 }}>
//               MUTHAYAMMAL ENGINEERING COLLEGE<br/>(An Autonomous Institution)
//             </Typography>
//             <Stack spacing={2} direction="row">
//               <Button variant="contained" color='info'>ECR</Button>
//               <Button variant="contained" color='info' onClick={handleClick}>SETAF</Button>
//               <Menu
//                 id="simple-menu"
//                 anchorEl={anchorEl}
//                 keepMounted
//                 open={Boolean(anchorEl)}
//                 onClose={handleClose}
//               >
                
// <MenuItem onClick={handleClose}>Journal Publications</MenuItem>
                
//                 <MenuItem onClick={handleClose}><Link to="/student_motivatio" style={{color:"black", textDecoration:"none"}}>Student Motivation for Paper Presentations,Project Submission,Other Contest</Link></MenuItem>
//                 <MenuItem onClick={handleClose}><Link to="/professional_society_membership" style={{color:"black", textDecoration:"none"}}>Professional Society Membership</Link></MenuItem>
//                 <MenuItem onClick={handleClose}><Link to="/students_field_work_internship_guidance" style={{color:"black", textDecoration:"none"}}>Students Field Work Internship Guidance</Link></MenuItem>
//               </Menu>
//               <Button variant="contained" color='info'>SESTA</Button>
//               <Button variant="contained" color='error'>LOGOUT</Button>                
//             </Stack>
//           </Toolbar>
//         </AppBar>
//       </Box>
//     </Router>
//   );
// }

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import logo from './logo.jpg';
import Stack from '@mui/material/Stack';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

export default function ButtonAppBar() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <img src={logo} style={{width:"75px", marginLeft:"-25px"}}/>
            <Typography variant="h6" className='text-center' component="div" sx={{ flexGrow: 1 }}>
              MUTHAYAMMAL ENGINEERING COLLEGE<br/>(An Autonomous Institution)
            </Typography>
            <Stack spacing={2} direction="row">
              <Button variant="contained" color='info'>ECR</Button>
              <Button variant="contained" color='info' onClick={handleClick}>SETAF</Button>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}><Link to="/student_motivation" style={{color:"black", textDecoration:"none"}}>Student Motivation for Paper Presentations,Project Submission,Other Contest</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/professional_society_membership" style={{color:"black", textDecoration:"none"}}>Professional Society Membership</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/students_field_work_internship_guidance" style={{color:"black", textDecoration:"none"}}>Students Field Work Internship Guidance</Link></MenuItem>
              </Menu>
              <Button variant="contained" color='info'>SESTA</Button>
              <Button variant="contained" color='error'>LOGOUT</Button>                
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
  );
}
