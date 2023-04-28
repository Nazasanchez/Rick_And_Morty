import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import Form from "./components/Form";  
import { useState } from 'react';
import axios from 'axios';
import {Routes, Route, useLocation} from 'react-router-dom';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = 'e56b82125978.9aab4284909b4b45081d'; 


function App() {
   const location= useLocation();
const [characters, setCharacters] = useState([]);

const onSearch = (id)=>  {
   axios(`${URL_BASE}/${id}?key=${API_KEY}`)
   .then(response => response.data)
   .then(({ data }) => {
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      } else {
         window.alert('¡No hay personajes con este ID!');
      }
   });
}

const onClose = (id)=> {
   const charactersFiltered = characters.filter(character =>
      character.id !== Number(id))
      setCharacters(charactersFiltered)
}


return (
      <div className='App'>
         {
            location.pathname !== '/'
            ? <Nav onSearch={onSearch} />
            : null
         }


         <Nav onSearch={onSearch}/> 

         <Routes>
            <Route path='/' element={<Form/> }/>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose} /> }/>
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
         </Routes>
         
       
      </div>
   );
}

export default App;
