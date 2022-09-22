import { useEffect, useState } from 'react';
import './App.css';
import Countries from './components/Countries';

function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((data) => data.json())
      .then((countriesData) => {
        console.log(countriesData);
        setCountries(countriesData);
      });
  }, []);

  return (
    <div className="App">
      <Countries countries={countries} />
    </div>
  );
}

export default App;
