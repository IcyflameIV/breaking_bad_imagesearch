import {useState,useEffect} from 'react';
import axios from './Components/api.js';
import './App.css';
import Header from './Components/navBar';
import SearchBar from './Components/searchBar';
import CharacterList from './Components/characterList';
import Spinner from './Components/spinner.jsx';

function App() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query,setQuery] = useState("");

  useEffect(()=> {
  const fetchItems = async()=>{
    const results =  await axios.get(`/characters?name=${query}`);
    setItems(results.data);
    setLoading(false);
  };

  fetchItems();
  },[query]);
  return (
    <div className="app">
      <Header/>
      <SearchBar setQuery ={(query) => setQuery(query)} />
      {loading ? <Spinner/> : <CharacterList items={items}/>}
    </div>
  );
}

export default App;