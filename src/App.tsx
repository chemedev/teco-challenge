import { useState } from "react"

import "./App.css"

import DataLoader from "./components/DataLoader"
import Weathercard from "./components/WeatherCard"
import CitySelector from "./components/CitySelector"

const API_KEY = import.meta.env["VITE_API_KEY"]
const CITIES = ["Rosario", "CABA", "Córdoba", "Bariloche", "Mendoza"]
const URL = `https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}&units=metric`

const App = () => {
  const [currentCity, setCurrentCity] = useState("Rosario")

  const updateCity = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentCity(evt.target.value)
  }

  return (
    <div className="App flex flex-col h-screen items-center justify-center bg-gradient-to-b from-indigo-900 to-indigo-100">
      <CitySelector
        currentCity={currentCity}
        updateCity={updateCity}
        citiesList={CITIES}
      />
      <DataLoader data="weather" url={`${URL}&q=${currentCity}`}>
        <Weathercard />
      </DataLoader>
    </div>
  )
}

export default App
