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
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import Avatar from '@mui/material/Avatar';
import BoltIcon from '@mui/icons-material/Bolt';
import './Sidebar.scss';
import Logo from '../assets/Logo.svg';

const navItems = [
  { text: 'Creations', icon: <HomeIcon /> },
  { text: 'Explore', icon: <CollectionsIcon /> },
];

const Sidebar = () => (
  <div className="sidebar-container">
    
    <List className="sidebar-list">
    <div className="sidebar-logo">
      <img src={Logo} alt="Logo" />
    </div>
      {navItems.map((item) => (
        <ListItem button key={item.text} className="sidebar-list-item">
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} className="sidebar-list-item-text" />
        </ListItem>
      ))}
    </List>
    <div className="sidebar-bottom">
      <div className="sidebar-bell">
        <NotificationsNoneIcon  />
      </div>
      <div className="sidebar-avatar">
        <Avatar alt="User" src="https://randomuser.me/api/portraits/men/32.jpg" sx={{ width: 26, height: 26 }} />
      </div>
      <div className="sidebar-upgrade-card">
        <div className="sidebar-upgrade-text">
          <BoltIcon className="sidebar-bolt"  />
          <div className="sidebar-upgrade-count">12</div>
        </div>
        <div className="sidebar-upgrade-label">Upgrade</div>
      </div>
    </div>
  </div>
);

export default Sidebar; 