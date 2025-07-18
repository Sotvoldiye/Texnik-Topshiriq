import React, { useState } from "react";
import DropDownMenu from '../components/DropDownMenu';
import { cities } from "../Request";

export default function CitySelector({ onSelect }) {
  const [query, setQuery] = useState('');
  const [filteredCities, setFilteredCities] = useState(cities);

  // Shaharni qidirish funksiyasi input orqali
  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
    setFilteredCities(
      cities.filter(city =>
        city.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <div className="flex w-100 justify-between gap-2">
      <input
        type="text"
        placeholder="Shahar nomini kiriting"
        value={query}
        onChange={handleSearch}
        className="border px-3 py-2 rounded"
      />
      <DropDownMenu options={filteredCities} onSelect={onSelect} />
      <div></div>
    </div>
  );
}