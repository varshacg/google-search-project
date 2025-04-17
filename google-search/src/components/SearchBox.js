import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom';

function SearchBox(){
    const [query,setQuery]=useState('');
    const navigate = useNavigate();

    const handleSearch=()=>{
        if(query.trim() !==''){
            navigate(`/search?q=${query}`);
        }
    };


 return (
   <div className='search-box'>
     <input type='text' value={query}
       onChange={(e)=>setQuery(e.target.value)}
       placeholder='Search here'
    />
    <button onClick={handleSearch}>Google Search</button>

   </div>
 );
};

export default SearchBox;
