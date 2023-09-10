import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const DrawerComp = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const navLinks = [
    { to: '/', label: 'HOME' },
    { to: '/explore', label: 'EXPLORE' },
    { to: '/search', label: 'SEARCH MEAL' },
    
  ];

  const navList = (
    <List>
      {navLinks.map((link) => (
        <ListItem key={link.label} component={Link} to={link.to}>
          <ListItemText primary={link.label} />
        </ListItem>
      ))}
    </List>
  );
  

  return (
    < div className='transparent-bar'> 
      <AppBar className='bar'>
      <Toolbar  >
        <IconButton edge="start" color="secondary" aria-label="menu" onClick={toggleDrawer(true)}>
          <MenuIcon />
        </IconButton>
        <h1 style={{textAlign:'center',color:'white',fontFamily:`Georgia, 'Times New Roman', Times, serif`}}>Flavour Feast</h1>
        <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          {navList}
        </Drawer>
      </Toolbar>
    </AppBar>
    </div>
  );
};

export default DrawerComp;