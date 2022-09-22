import React from "react";

function Country({ countryData }) {
  return <div className="country">{countryData.name.common}</div>;
}

export default Country;
