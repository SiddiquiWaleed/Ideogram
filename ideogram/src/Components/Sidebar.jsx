import React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import BrushIcon from '@mui/icons-material/Brush';
import LayersIcon from '@mui/icons-material/Layers';
import CollectionsIcon from '@mui/icons-material/Collections';
import LoginIcon from '@mui/icons-material/Login';
import './Sidebar.scss';

const navItems = [
  { text: 'Home', icon: <HomeIcon /> },
  { text: 'Creations', icon: <CollectionsIcon /> },
  { text: 'Sign in', icon: <LoginIcon />, bottom: true },
];

const Sidebar = () => (
<div className="sidebar-container">
    <List className="sidebar-list">
      {navItems.filter(item => !item.bottom).map((item) => (
        <ListItem button key={item.text} className="sidebar-list-item">
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
    <div className="sidebar-bottom">
      <ListItem button key="Sign in">
        <ListItemIcon><LoginIcon /></ListItemIcon>
        <ListItemText primary="Sign in" />
      </ListItem>
    </div>
  </div>
);

export default Sidebar; 