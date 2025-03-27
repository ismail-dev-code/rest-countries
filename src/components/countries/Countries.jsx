import React, { use, useState } from "react";
import Country from "./country/Country";
import "../countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const countries = use(countriesPromise);

  const handleVisitedCountries = (country) => {
    console.log("country visited to be added hoice", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  return (
    <div>
      <h1>
        <small>Total Countries:</small> {countries.length}
      </h1>
      <h3>Traveled so far: {visitedCountries.length}</h3>
      <ol>
        {
          visitedCountries.map(country=> <li>{country.name.common}</li>)
        }
      </ol>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            handleVisitedCountries={handleVisitedCountries}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
