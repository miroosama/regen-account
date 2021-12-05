import React, { useState } from 'react';
import { Window as KeplrWindow } from "@keplr-wallet/types";

import CustomAppBar from './components/AppBar';
import AccountContainer from './views/AccountContainer';
import { REGEN_KEPLR_SETUP, CHAIN_ID } from './utils/constants';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface Window extends KeplrWindow {}
};

function App() {
  const [address, setAddress] = useState('');

  window.onload = async () => {
    if (!window.keplr) {
      alert('Install keplr');
    } else {
      // sign in 
      await window.keplr.enable(CHAIN_ID);
      const offlineSigner = window.keplr.getOfflineSigner(CHAIN_ID);
      const accounts = await offlineSigner.getAccounts();
      // request to use regen testnet
      await window.keplr.experimentalSuggestChain(REGEN_KEPLR_SETUP);
      setAddress(accounts[0].address);
    }
  };

  return (
    <div>
      <CustomAppBar address={address} />
      <AccountContainer address={address} />
    </div>
  );
}

export default App;
