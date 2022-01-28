import type { CityWeather } from "../typings"

type Props = {
  weather?: CityWeather
}

const WeatherCard = ({ weather }: Props) => {
  if (!weather) return <div>Loading...</div>
  return (
    <div className="card grid grid-rows-2 mx-auto text-slate-100">
      <div className="flex items-center justify-center card__header bg-slate-900 mb-5 rounded-md">
        <img src={weather.icon} alt="Weather icon" />
        <p className="card__temp font-bold text-3xl">
          {weather.temp.toFixed(1)}°
        </p>
      </div>
      <div className="card__body flex items-center justify-evenly bg-slate-900 rounded-md">
        <p>
          ST:{" "}
          <span className="text-2xl font-bold">
            {weather.feelsLike.toFixed(1)}°
          </span>
        </p>
        <p>
          Hum: <span className="text-2xl">{weather.humidity}%</span>
        </p>
      </div>
    </div>
  )
}

export default WeatherCard
