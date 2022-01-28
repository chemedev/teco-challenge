import { useState, useEffect, useRef } from "react"

interface Props {
  currentCity: string
  updateCity: (evt: React.ChangeEvent<HTMLSelectElement>) => void
  citiesList: string[]
}

const CitySelector = ({ currentCity, updateCity, citiesList }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef<HTMLSelectElement>(null)

  useEffect(() => {
    if (selectRef) selectRef.current?.blur()
  }, [currentCity])

  return (
    <div className={`my-5 selectWrapper ${isOpen ? "rotateIcon" : ""}`}>
      <select
        ref={selectRef}
        onChange={updateCity}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        className="appearance-none pl-5 leading-loose text-slate-100 bg-slate-900 text-2xl rounded-md"
      >
        {citiesList.map(city => (
          <option key={city} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CitySelector
