import React, { use, useState } from "react";
import Country from "./country/Country";
import "../countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const countries = use(countriesPromise);

  const handleVisitedCountries = (country) => {
    console.log("country visited to be added hoice", country);
  };

  return (
    <div>
      <h1>
        <small>Total Countries:</small> {countries.length}
      </h1>
      <h3>Traveled so far: </h3>
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
