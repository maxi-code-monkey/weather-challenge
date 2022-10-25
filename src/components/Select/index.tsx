import React from 'react';
import { InputLabel, Select, MenuItem, FormHelperText, FormControl, SelectChangeEvent } from '@mui/material';
import { Coordinates } from '../../hooks/useGetForecastWeather/types';

export interface Option {
  label: string;
  value: City;
}

export interface City {
  name: string;
  country: string;
  coord: Coordinates;
  id: number;
};

interface Props {
  id: string;
  label: string;
  labelId: string;
  value: number;
  options: Array<City>;
  handleChange: (event: SelectChangeEvent<number>) => void;
};

const CustomCitySelect = ({
  id,
  label,
  labelId,
  value,
  options,
  handleChange,
}: Props) => {
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
      <InputLabel id={labelId}>{label}</InputLabel>
      <Select
        labelId={labelId}
        id={id}
        value={value}
        label={label}
        onChange={handleChange}
      >
        {
          options.map((opt) => <MenuItem key={`${opt.name}-${opt.id}`} value={opt.id}>{opt.name}</MenuItem>)
        }
      </Select>
      <FormHelperText>Select one of these randomized cities</FormHelperText>
    </FormControl>
  );
};

export default CustomCitySelect;