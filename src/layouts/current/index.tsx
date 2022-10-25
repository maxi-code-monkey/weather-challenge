import React from 'react';
import dayjs from 'dayjs'
import { Unstable_Grid2 as Grid, Typography } from '@mui/material';
import { CurrentWeather } from '../../hooks/useGetCurrentWeather/types';
import WeatherAvatar from '../../components/Avatar';

interface Props {
  data: CurrentWeather | undefined;
};

const Weather = ({ data }: Props) => {
  const now = dayjs().format('MMM DD, HH:mm');

  return (
    <Grid columns={16} spacing={2}>
      <Grid xs={16}>
        <WeatherAvatar
          alt={data?.weather[0]?.description}
          icon={data?.weather[0].icon}
        />
        <Typography textAlign="center" variant="h2">
          {data?.main.temp} °c
        </Typography>
      </Grid>
      <Grid xs={16}>
        <Typography textAlign="center" variant="h4">
          {now}
        </Typography>
        <Typography textAlign="center" variant="h5">
          {data?.main.temp_min}° - {data?.main.temp_max}°
        </Typography>
        <Typography textAlign="center" variant="h5">
          Feels like {data?.main.feels_like}°
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Weather;