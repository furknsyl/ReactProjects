import axios from 'axios'
import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/ui/Header'

const App = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    fetch("https://api.breakingbadquotes.xyz/v1/quotes")
      .then(response => response.json())
      .then(response => setItems(response));
  }, []);

  return (
    <div className="container">
      <Header />
      {items.map(item => {
        return (
          <div key={item} className="item-container">
            <h2>{item.quote}</h2>
            <br></br>
            <h4>{item.author}</h4>

          </div>
        );
      })}
    </div>
  );
}

export default App;
