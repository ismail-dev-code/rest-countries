import React, { useState } from "react";
import "./country.css";

const Country = ({ country, handleVisitedCountries, handleVisitedFlags}) => {
  const [visited, setVisited] = useState(false);
  // console.log(handleVisitedCountries);

  const handleClick = () => {
    // if (visited === true) {
    //   setVisited(false);
    // } else {
    //   setVisited(true);
    // }
    setVisited(!visited);
    handleVisitedCountries(country);
  };
  return (
    <div className={`country ${visited && "country-visited"}`}>
      <h3>Name: {country.name.common}</h3>
      <img src={country.flags.png} alt="img loading" />
      <p>
        Freedom Status:{" "}
        {country.independent ? "Independent" : "Not Independent"}
      </p>
      <p>Population: {country.population}</p>
      <button className={visited? "btn-visited": "btn-not-visited"} onClick={handleClick}>
        {visited ? "Visited" : "Not Visited"}
      </button>
      <button onClick={()=>handleVisitedFlags(country.flags.png)}>Add visited flag</button>
    </div>
  );
};

export default Country;
