import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
    
    <AppBar position="static">
    <Toolbar>
      
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} align='left' >
        STUDENT APP
      </Typography>
      {/* <Button color="inherit">AddStudent</Button> */}
      {/* <Button color="inherit">ViewStudent</Button> */}
      <Button >
              <Link to='/addstud' style={{color:'white'}}>AddStudent</Link>
      </Button>
      <Button >
              <Link to='/viewstud' style={{color:'white'}}>ViewStudent</Link>
      </Button>
    </Toolbar>
  </AppBar>
  </div>
  )
}

export default Navbar