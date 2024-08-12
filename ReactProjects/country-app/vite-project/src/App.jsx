import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [countries, setcountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then(response => response.json())
      .then(response => setcountries(response));
  }, []);

  console.log(countries);

  return (
    <div className="App">
      <h1>React Dersleri</h1>
      <h3>fetch() / axios ile API'dan veri almak</h3>
      {countries.map(country => {
        return (
          <div key={country.name.common} className="country-container">
            <h2>{country.name.common}</h2>
            <h4>{country.capital}</h4>
            <p>
              <img
                src={country.flags.png}
                alt={country.name.common}
              />
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default App
