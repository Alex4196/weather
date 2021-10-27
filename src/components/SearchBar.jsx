import React, {useState} from 'react';
import Swal from 'sweetalert2'
import { useDispatch } from "react-redux";
import styles from "./SearchBar.module.css";
import { addCity } from '../actions';

export default function SearchBar() {

    const dispatch = useDispatch();

    
  
   const [search, setSearch] = useState("");


  const handleSearch = (e) => {

 
    e.preventDefault();
    setSearch('');
    dispatch(addCity(search));
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleKeyDown = (e) => {
 
    if (e.key === 'Enter') {
    
      e.preventDefault();
      dispatch(addCity(search));
      setSearch('');
    }
  }

  
  return (
 
    <div className={styles.wrap}>
    <div className={styles.search}>
      <input
        className={styles.searchTerm}
        name='city'
        placeholder="Search..."
        autoComplete="off"
        value={search}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button className={styles.searchButton} onClick={handleSearch}>
        +
      </button>
    
      </div> 
    </div>
  );
}