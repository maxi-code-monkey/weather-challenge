import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

const Spinner = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '90vh', justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgress />
    </div>
  );
};

export default Spinner;