import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Coutries from './component/Countries/Coutries';

function App() {
  return (
    <div className="App">
      <Coutries></Coutries>
      
    </div>
  );
}

/* function LoadData() {
  let [country,setCountries]=useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
  },[])
  return(
    <div>
      <h1>Countries Data Load</h1>
      <h3>Available Countries: {country.length}</h3>
      {
        country.map(country=><DisplayData name={country.name.common}></DisplayData>)
      }
    </div>
  )
}

function DisplayData(props) {
  console.log(props);
  return(
    <div>
      <h3>Name: {props.name}</h3>
    </div>
  )
} */

export default App;
