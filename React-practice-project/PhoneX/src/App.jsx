import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import CardContainer from './CardContainer';
import PhoneDetail from './pages/PhoneDetail/PhoneDetail';
import './App.css';
import { DataContext } from './Contexts/DataContext'
import { useContext } from 'react';

const App = () => {
  const [data, setData] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    fetch(`https://dummyjson.com/products/search?q=${query}`)
      .then(res => res.json())
      .then((phnData) => {
        setData(phnData.products);
      });
  }, [query]);

  function searchHandler(e) {
    let inputValue = e.target.value;
    setQuery(inputValue);
  }

  return (

    <DataContext.Provider value={data}>
      <div className="searchContainer">
        <div className="logo">
          <h1>PhoneX</h1>
        </div>
        <div className="searchbox">
          <input type="text" onChange={searchHandler} placeholder='Search here...' />
          {/* <button className='btn'>search</button> */}
        </div>
      </div>
      <CardContainer />
    </DataContext.Provider>
  );
}

export default App;
