import React from "react";
import Country from "./Country";

function Countries({ countries }) {
  return (
    <div className="countries">
      {countries.map((country) => {
        return <Country countryData={country} />;
      })}
    </div>
  );
}

export default Countries;
