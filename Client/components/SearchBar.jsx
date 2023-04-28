import {useState} from 'react';


export default function SearchBar({onSearch}) {
const [id, setId] = useState("");

const handleChange = (event) =>{
setId(event.target.value)

}


   return (
      <div>
         <input type='search' oneChange={handleChange} value={id}/>
         <button onClick={() =>{onSearch(id); setId('')}}>Agregar</button> 
      </div>
   );
}

