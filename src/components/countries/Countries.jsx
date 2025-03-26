import React, { use } from "react";
import Country from "./country/Country";
import "../countries.css";

const Countries = ({ countriesPromise }) => {
  const countries = use(countriesPromise);

  return (
    <div>
      <h1>
        <small>Total Countries:</small> {countries.length}
      </h1>
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.cca3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
