import React, { useState, useEffect } from "react"
import type { CityWeather } from "../typings"

interface Props {
  url: string
  data: string
}

const DataLoader: React.FC<Props> = ({ url, data, children }) => {
  const [state, setState] = useState<CityWeather | null>(null)

  useEffect(() => {
    ;(async () => {
      const res = await fetch(url)
      const data = await res.json()

      setState({
        name: data?.name,
        feelsLike: data?.main?.feels_like,
        humidity: data?.main?.humidity,
        temp: data?.main?.temp,
        icon: data?.weather[0]?.icon
          ? `http://openweathermap.org/img/wn/${data?.weather[0]?.icon}@2x.png`
          : ""
      })
    })()
  }, [url])

  return (
    <>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [data]: state })
        }
        return child
      })}
    </>
  )
}

export default DataLoader
