import { UseQueryOptions, useQuery } from "@tanstack/react-query";
import { CurrentWeather } from "./types";

export const useGetCurrentWeather = (
  lat: number = 44.34,
  lon: number = 10.99,
  options?: UseQueryOptions<CurrentWeather>
) => {
  return useQuery<CurrentWeather>(
    ["getCurrentWeather", lat, lon],
    async () => {
      const response = await fetch(
        `${process.env.REACT_APP_CURRENT_WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`,
        {
          method: "GET",
        }
      );
      if (!response.ok) {
        throw new Error("failed to get current weather details");
      }
      return response.json();
    },
    { enabled: !!lat && !!lon, ...options }
  );
};
