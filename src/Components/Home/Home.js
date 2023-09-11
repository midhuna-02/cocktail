import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
import CocktailList from '../Cocktail/CocktailList'

const Home = () => {
  return (
    <main>
        <SearchForm/>
        <CocktailList/>
    </main>
  )
}

export default Home