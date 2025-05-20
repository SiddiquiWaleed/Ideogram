import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import './Topbar.scss';

const Topbar = () => (
  <AppBar position="static" className="topbar-root">
    <Toolbar>
      <Typography variant="h6" sx={{ flexGrow: 1 }}>
        What will you create?
      </Typography>
      <div className="search-container">
        <SearchIcon className="search-icon" />
        <InputBase
          placeholder="Describe what you want to see"
          className="search-input"
          inputProps={{ 'aria-label': 'search' }}
        />
      </div>
    </Toolbar>
  </AppBar>
);

export default Topbar; 