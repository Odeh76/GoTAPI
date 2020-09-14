import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import Header from './components/userinterface/Header';
import CharGrid from './components/characters/CharGrid';
import styled from 'styled-components';
import Spinner from './components/userinterface/Spinner';
const App = () => {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

    useEffect(() => {
      const fetchItems = async () => {
        const characters = await axios(`https://www.anapioficeandfire.com/api/characters?page=1&pageSize=20`)
        const houses = await axios (`https://www.anapioficeandfire.com/api/houses?page=1&pageSize=20`)
        const books = await axios(`https://www.anapioficeandfire.com/api/books?page=1&pageSize=20`)

        console.log(characters.data)
        console.log(houses.data)
        console.log(books.data)

        setItems(characters.data)
        setIsLoading(false)
      }

      fetchItems()
    }, [query])

  return (
    <div className="App">
     <Header />
     <CharGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
