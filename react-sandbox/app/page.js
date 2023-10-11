"use client"
import React, { useState } from 'react'
import styles from './page.module.css'
import MyButton from "./compenents/atoms/MyButton"
import SearchInput from "./compenents/molecules/SearchInput"
import SearchResults from "./compenents/molecules/SearchResults"



export default function Home() {

  // const [searchResults, setSearchResults] = useState([])
  const [searchResults, setSearchResults] = useState([])


  function setStateClickHandler (e){
    console.log(e);
    // setSearchResults([])
  }
  function searchClickHandler (e){
    console.log(e);
  }
  let results = [];
  results.push("one")
  results.push("two")
  results.push("tres")
  setSearchResults(results);

  return (
    <main className={styles.main}>


      <h1> Hello World </h1>
      <div className="search-input-container">
        <SearchInput 
        title="SEARCH"
        searchClickHandler={searchClickHandler} 
        buttonText="GO"
        />

        {/* <div style=({height:"80px"})></div>  */}

        <SearchInput 
        title="NEWSLETTER"
        searchClickHandler={searchClickHandler} 
        buttonText="GO"
        />

        <SearchResults
          data={searchResults}
          />
      </div>

      <MyButton 
      clickHandler={setStateClickHandler}
      buttonText={"Set State"}
      /> 
    </main>
  )
}

