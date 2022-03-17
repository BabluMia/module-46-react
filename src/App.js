import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Person from './components/Person/Person';
import Header from './components/Header/Header';


function App() {
  return (
    <div className="App">
    <Header></Header>
    <Country></Country>
    <Person></Person>
    </div>
  );
}




//  {/* <Countrys></Countrys> */}
// function Countrys(){
//   const [countries ,setCountries] = useState([])
//   useEffect(()=>{
//     fetch('https://restcountries.com/v3.1/all')
//     .then(res => res.json())
//     .then(data => setCountries(data))
//   },[])
//   return (
//     <div>
//       <h2>Visiting every country in the world!!</h2>
//       <h4>Available Country : {countries.length}</h4>
//       <div className='country'>
//         {
//           countries.map(country => <Country name={country.name.common} population={country.population}  capital={country.capital}></Country>)
//         }
//       </div>
//     </div>
//   )
// }

// function Country(props){
//    return(
//        <div>
//          <h3>Name:{props.name}</h3>
//          <h4>Population:{props.population}</h4>
//          <h4>Capital:{props.capital}</h4>
//        </div>
//    )
// }


export default App;
