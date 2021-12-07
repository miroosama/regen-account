import React, { useEffect, useState } from 'react';
import { AccountProps } from '../utils/types';
import { StargateClient } from '@cosmjs/stargate';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { COIN_DENOM_MINIMAL, REGEN_ENDPOINT} from '../utils/constants';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  textSize: '20px',
  fontWeight: 'bold',
  color: theme.palette.text.primary,
}));

const AccountContainer = ({ address }: AccountProps) => {
  const [balance, setBalance] = useState('');

  useEffect(() => {
    const getBalance = async () => {
      const client = await StargateClient.connect(REGEN_ENDPOINT);
      const balanceRes = await client.getBalance(address, COIN_DENOM_MINIMAL);
      if (balanceRes && balanceRes.amount) {
        setBalance(balanceRes.amount);
      }
    }
    if (address) getBalance();
  }, [address]);

  return (
    <Box sx={{ padding: '5%' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <h1>Account Details</h1>
        </Grid>
        <Grid item xs={12} md={4}>
          <Item sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Your Balance:</span>
            <span>{ balance }</span>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AccountContainer;
