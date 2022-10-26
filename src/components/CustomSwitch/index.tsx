import React from 'react';
import { Switch, FormControlLabel } from '@mui/material';

export const SWITCH_TEST_ID = 'switch-test-id';

interface Props {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const CustomSwitch = ({
  handleChange,
  label = "Location"
}: Props) => {

  const handleChanges = (event: React.ChangeEvent<HTMLInputElement>) => handleChange(event);

  return (
    <FormControlLabel
      control={
        <Switch
          data-testid={SWITCH_TEST_ID}
          onChange={handleChanges}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      }
      label={label}
    />
  );
};

export default CustomSwitch;