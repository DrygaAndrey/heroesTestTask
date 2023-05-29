import React, { useState, useEffect } from 'react';
import Header from "./components/header/header";
import axios from 'axios';
import HeroesList from "./components/heroesList/heroesList";
import AddHeroForm from './components/addHeroForm/addHeroForm';
import Message from './components/message/message';

function App() {
  const [showAddHeroForm, setShowAddHeroForm] = useState(false);
  const [message, setMessage] = useState('');
  const [heroes, setHeroes] = useState([]);

  useEffect(() => {
    getHeroes();
  }, []);
  const getHeroes = () => {
    axios.get('http://localhost:3333/heroes/getHeroes') // Замените на URL вашего сервера
      .then(response => {
        setHeroes(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }


  return (
    <div className="App">
      <Header setShowAddHeroForm={setShowAddHeroForm} />
      <HeroesList heroes={heroes} />

      {showAddHeroForm && <AddHeroForm setShowAddHeroForm={setShowAddHeroForm} setMessage={setMessage} getHeroes={getHeroes} />}
      {message && <Message setMessage={setMessage} message={message} />}
    </div>
  );
}

export default App;
