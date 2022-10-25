import React from 'react';
import { ForecastDay } from '../../utils/formatForecastData';
import { Paper, Unstable_Grid2 as Grid, Typography } from '@mui/material';
import WeatherAvatar from '../Avatar';
import { styles } from './styles';

interface Props {
  data: ForecastDay;
};

const WeatherRow = ({ data }: Props) => {
  return (
    <Paper elevation={2}>
      <Grid container spacing={2} columns={16} display="flex" justifyContent="center" alignItems="center">
        <Grid xs={4} sm={2} md={3}>
          <Typography variant="h6">
            {data.date}
          </Typography>
        </Grid>
        <Grid xs={4} sm={2}>
          <WeatherAvatar
            alt={data.description}
            icon={data.icon}
            variant="SMALL"
          />
        </Grid>
        <Grid sx={styles.description} xs={7} sm={4} md={5}>
          <Typography variant="h6">
            {data.description}
          </Typography>
        </Grid>
        <Grid xs={7} sm={4}>
          <Typography variant="h6">
            {data.temp_min}º - {data.temp_max}º
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default WeatherRow;