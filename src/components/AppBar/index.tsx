import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export const APP_BAR_TEST_ID = "app-bar-test-id";

const CustomAppBar = () => {
  return (
    <Box data-testid={APP_BAR_TEST_ID} sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Flow Weather Challenge
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default CustomAppBar;