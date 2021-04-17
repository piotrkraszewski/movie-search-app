import { useContext } from 'react'
import './Searchbar.scss'
import { AppContext } from 'AppFiles/Contexts/AppContext'
import closeImg  from 'Images/close.svg'
import {DebounceInput} from 'react-debounce-input';

export default function Searchbar(props) {
  const {searchbarText, setSearchbarText, onSearchbarTextChanging} = useContext(AppContext)

  const {onClick, onKeyPress} = props

  function resetSearch() {
    setSearchbarText('')
  }

  return (
    <form onSubmit={e => e.preventDefault()}>
      <DebounceInput
        debounceTimeout={250}
        onChange={onSearchbarTextChanging}
        type='text'
        placeholder='Search Movie'
        value={searchbarText}
        onKeyPress={onKeyPress}
        onClick={onClick}
      />
      <img 
        src={closeImg} 
        onClick={resetSearch}
        alt="close search"
      />
    </form>
  )
}