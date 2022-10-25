import React, { useMemo } from 'react';
import { Forecast } from '../../hooks/useGetForecastWeather/types';
import { Stack } from '@mui/material';
import { formatForecastData } from '../../utils/formatForecastData';
import dayjs from 'dayjs';
import WeatherRow from '../../components/WeatherRow';

interface Props { 
  data: Forecast | undefined;
}

const WeekForecast = ({ data }: Props) => {
  const dateRange = useMemo(() => ({ 
    start: dayjs(),
    end: dayjs().add(5, 'day')
  }), []);

  const dateRangeForecast = useMemo(() => formatForecastData(data?.list, dateRange), [data?.list]);
  
  const ForecastList = useMemo(() => (
    dateRangeForecast.map((item, i) => <WeatherRow key={`${item.date}-${i}`} data={item} />)
  ), [dateRangeForecast]);

  return (
    <Stack justifyContent="center" minWidth="100%" maxWidth="xl" spacing={2}>
      {ForecastList}
    </Stack>
  );
};

export default WeekForecast;