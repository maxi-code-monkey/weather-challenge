import React, { Suspense, useMemo, useState, useCallback } from "react";
import "./App.css";
import { withScopedCss } from './hoc/withScopedCss';
import AppContext from "./context/AppContext";
import ErrorBoundary from "./components/ErrorBoundary";
import CustomAppBar from "./components/AppBar";
import Main from "./layouts/main";
import { randomizeCities } from "./utils/randomizeCities";
import { City } from "./components/CitySelector";
import { SelectChangeEvent } from "@mui/material";
import Spinner from "./components/Spinner";

const App = () => {
  const randomizedCities = useMemo(() => randomizeCities(5), []);
  const [selectedCity, setSelectedCity] = useState<City>(randomizedCities[0]);
  const [disableCitySelector, setDisableCitySelector] = useState<boolean>(false);

  const handleCityChange = useCallback((event: SelectChangeEvent<number>) => {
    const city = randomizedCities.find((city) => city.id ===event.target.value);
    city && setSelectedCity(city);
  }, [setSelectedCity, randomizedCities]);

  const handleLocationChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setDisableCitySelector(event.target.checked);
    if ("geolocation" in navigator && event.target.checked) {
      navigator.geolocation.getCurrentPosition(
        (position) => setSelectedCity({
            name: '',
            country: '',
            coord: {
              lat: position.coords.latitude,
              lon: position.coords.longitude
            },
            id: 0
          }),
        (err) => setDisableCitySelector(false)
      )
    }
  }, [setSelectedCity])
  
  return (
    <AppContext>
      <ErrorBoundary>
        <Suspense fallback={<Spinner />}>
          <CustomAppBar />
          <Main
            selectedCity={selectedCity}
            handleCityChange={handleCityChange}
            allCities={randomizedCities}
            handleLocationChange={handleLocationChange}
            disableCitySelector={disableCitySelector}
          />
        </Suspense>
      </ErrorBoundary>
    </AppContext>
  );
};

export default withScopedCss(App);
