import React,{useEffect,useRef} from 'react'
import { useGlobalContext } from '../../Hooks/Context'

const SearchForm = () => {
    const {setSearchTerm}=useGlobalContext()
  const searchValue=useRef('')
  useEffect(() => {
    searchValue.current.focus()
  }, [])
  function searchCocktail()
  {
    setSearchTerm(searchValue.current.value)
  }
  function handleSubmit(e)
  {
    e.preventDefault()
  }
  return (
    <section className='section search'>
    <form className='search-form' onSubmit={handleSubmit}>
        <div className="form-control">
            <label htmlFor="name">search your favorite cocktail</label>
            <input type="text"
              name='name'
               id='name' 
            ref={searchValue}
            onChange={searchCocktail}


            />

          
        </div>

    </form>

</section>
  )
}

export default SearchForm