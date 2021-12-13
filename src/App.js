import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
  YELP_API_URL_BASE
} from './common/constants';
import Home from './pages/Home/Home';
import './App.css';

export const AppContext = React.createContext({});

console.log('yelp', YELP_API_URL_BASE);

function App() {
  const [searchCity, setSearchCity] = useState('Alpharetta');
  const [searchResult, setSearchResult] = useState({});
  const [searchTerm, setSearchTerm] = useState('ice cream');

  const value = {
    searchCity,
    setSearchCity,
    searchResult,
    setSearchResult,
    searchTerm,
    setSearchTerm
  }

  const doSearch = async(searchTerm, searchCity) => {

    let config = {
      method: 'get',
      url: 'https://api.yelp.com/v3',
      headers: {
        "Access-Control-Allow-Origin":"*",
        // 'Authorization': 'Bearer ' + env.YELP_API_KEY
        'Authorization': 'Bearer MKp0w1jImCLQMd5mY5DVrlBjxOYs-9VJAdxmTfTjVagZsHgMPsmEP2rnyYOnTxw8jL9ga5ikw9xYsgZceMtqarJDTibS0NdsiwO0Tw85qdm-deyffmGzNJXJWjSyYXYx'
      },
      data: {
        'term': searchTerm,
        'location': searchCity
      }
    };

    await axios(config)
        .then(function(response) {
          console.log('response', response);
        })

  }


  useEffect(() => {
    doSearch(searchTerm, searchCity);
  }, [searchTerm, searchCity]);

  return (
    <AppContext.Provider value={value}>
      <div className="mainContainer">
        <Home />
      </div>
    </AppContext.Provider>
  );
}

export default App;
