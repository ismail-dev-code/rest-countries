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
      <img style={{width: '360px', height: '200px'}} src={country.flags.png} alt="img loading" />
      <h3>{country.name.common}</h3>
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
