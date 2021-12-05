import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { AccountProps } from '../utils/types';

const CustomAppBar = ({ address }: AccountProps) => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" component="div">
          Regen Challenge
        </Typography>
        <Typography component="div" sx={{ display: { xs: 'none', md: 'block' } }}>
          account address: { address }
        </Typography>
      </Toolbar>
    </AppBar>
  </Box>
);

export default CustomAppBar;