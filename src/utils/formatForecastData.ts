import {
  ForecastData,
  MainWeatherData,
} from "../hooks/useGetForecastWeather/types";
import isBetween from "dayjs/plugin/isBetween";
import dayjs from "dayjs";

export type ForecastDay = Partial<MainWeatherData> & {
  icon: string;
  date: string;
  description: string;
};

dayjs.extend(isBetween);

export const formatForecastData = (
  list: Array<ForecastData> | undefined,
  dateRange: { start: dayjs.Dayjs; end: dayjs.Dayjs }
) => {
  const finalArray: Array<ForecastDay> = [];
  let process = true;
  let count = 1;
  while (process) {
    const dateToProcess = dateRange.start.add(count, "day");
    const dayInfo =
      list?.filter(
        (item) =>
          dayjs(item.dt_txt).format("MMM DD") === dateToProcess.format("MMM DD")
      ) || [];
    const arrayObject: ForecastDay = {
      date: dateToProcess.format("MMM DD"),
      icon: dayInfo.length > 0 ? dayInfo[0].weather[0].icon : "",
      description: dayInfo.length > 0 ? dayInfo[0].weather[0].description : "",
      feels_like: dayInfo.length > 0 ? dayInfo[0].main.feels_like : 0,
      temp: dayInfo.length > 0 ? dayInfo[0].main.temp : 0,
      temp_max:
        dayInfo.length > 0 ? dayInfo[dayInfo.length - 1].main.temp_max : 0,
      temp_min: dayInfo.length > 0 ? dayInfo[0].main.temp_min : 0,
    };
    finalArray.push(arrayObject);
    count++;
    process = dateToProcess.isBetween(
      dateRange.start,
      dateRange.end,
      "day",
      "()"
    );
  }
  return finalArray;
};
