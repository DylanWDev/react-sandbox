"use client"
import React from "react"
import Image from 'next/image'
import styles from './page.module.css'
import MyButton from "./compenents/atoms/MyButton"
import SearchInput from "./compenents/molecules/SearchInput"

export default function Home() {
  function setStateClickHandler (e){
    console.log(e);
  }
  function searchClickHandler (e){
    console.log(e);
  }
  return (
    <main className={styles.main}>


      <h1> Hello World </h1>

      <div className="search-input-container">
        <SearchInput 
        title="SEARCH"
        searchClickHandler={searchClickHandler} 
        buttonText="GO"
        />

        {/* <div style="height:80px"></div>  */}

        <SearchInput 
        title="NEWSLETTER"
        searchClickHandler={searchClickHandler} 
        buttonText="GO"
        />
      </div>

      <MyButton 
      clickHandler={setStateClickHandler}
      buttonText={"Set State"}
      /> 
    </main>
  )
}

