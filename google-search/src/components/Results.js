import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
 
const Results = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');
  const [results, setResults] = useState([]);
 
  useEffect(() => {
    if (query) {
      axios.get(`http://localhost:5000/api/search?q=${query}`)
        .then(response => setResults(response.data))
        .catch(error => {
          console.error('Error fetching results:', error);
          setResults([]);
        });
    }
  }, [query]);
 
  return (
    <div className="search-results">
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        results.map((result, index) => (
          <div key={index} className="result">
            <a href={result.link} target="_blank" rel="noopener noreferrer">
              <p className="result-url">{result.link}</p>
              <h3 className="result-title">{result.title}</h3>
            </a>
            <p className="result-description">{result.description}</p>
          </div>
        ))
      )}
    </div>
  );
};
 
export default Results;
 