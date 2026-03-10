import React, { useState, useEffect } from 'react';
import PostList from './components/PostList';
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character');
        const data = await response.json();
  
        setCharacters(data.results);
      } catch (error) {
        console.error("Ошибка:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <header className="main-header">
        <h1>рик и морти</h1>
        <p>Персонажи: {characters.length}</p>
      </header>

     
        <PostList items={characters} />
     
    </div>
  );
}

export default App;