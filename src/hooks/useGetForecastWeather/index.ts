import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { Forecast } from "./types";

export const useGetForecastWeather = (
  lat: number = 44.34,
  lon: number = 10.99,
  options?: UseQueryOptions<Forecast>
) => {
  return useQuery<Forecast>(
    ["getForecastWeather", lat, lon],
    async () => {
      const response = await fetch(
        `${process.env.REACT_APP_FORECAST_URL}?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,
        {
          method: "GET",
        }
      );
      if (!response.ok) {
        throw new Error("failed to get program details");
      }
      return response.json();
    },
    { enabled: true, ...options }
  );
};
