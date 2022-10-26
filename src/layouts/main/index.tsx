import { Container, SelectChangeEvent } from '@mui/material';
import { Unstable_Grid2 as Grid, Stack } from '@mui/material';
import React from 'react';

import { useGetForecastWeather } from '../../hooks/useGetForecastWeather';
import Weather from '../current';
import { useGetCurrentWeather } from '../../hooks/useGetCurrentWeather';
import WeekForecast from '../forecast';
import { styles } from './styles';
import CitySelector, { City } from '../../components/CitySelector';
import CustomSwitch from '../../components/CustomSwitch';

interface Props {
  selectedCity: City;
  handleCityChange: (event: SelectChangeEvent<number>) => void;
  allCities: Array<City>;
  handleLocationChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  disableCitySelector: boolean;
}

const Main = ({
  selectedCity,
  handleCityChange,
  allCities,
  handleLocationChange,
  disableCitySelector,
}: Props) => {

  if (!selectedCity) {
    throw new Error('Missing required parameter: Selected City');
  };

  const { data: forecast } = useGetForecastWeather(selectedCity.coord.lat, selectedCity.coord.lon);
  const { data: currentWeather } = useGetCurrentWeather(selectedCity.coord.lat, selectedCity.coord.lon);

  return (
    <Container sx={styles.mainContainer} maxWidth="xl">
      <Stack direction="row" spacing={1} alignItems="center">
        <CitySelector
          id="city-select"
          label="City"
          labelId="city-select-label"
          value={selectedCity?.id || 0}
          options={allCities}
          handleChange={handleCityChange}
          disabled={disableCitySelector}
        />
        <CustomSwitch handleChange={handleLocationChange} />
      </Stack>
      <Grid container spacing={2} columns={16}>
        <Grid display="flex" direction="column" justifyContent="center" xs={16} md={6}>
          <Weather data={currentWeather} />
        </Grid>
        <Grid xs={16} md={10} display="flex" direction={{ xs: "column", md: "row" }} justifyContent="flex-start">
          <WeekForecast data={forecast} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Main;