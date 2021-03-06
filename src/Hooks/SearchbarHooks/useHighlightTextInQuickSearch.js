import { useContext } from 'react'
import { AppContext } from 'AppFiles/Contexts/AppContext'


export default function HighlightTextInQuickSearchHooks() {
  const { indexOfHighlightedMovie, setIndexOfHighlightedMovie } = useContext(AppContext)

  function highligthText(text, highlight, index) {
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'))

    return <span> { parts.map((part, i) => 
      <span 
        key={i} 
        style=
        {(part.toLowerCase() === highlight.toLowerCase() && indexOfHighlightedMovie !== index)
          ? { color: '#00FC87', fontWeight: 'bold' } 
          : part.toLowerCase() === highlight.toLowerCase() 
            ? { fontWeight: 'bold'}
            : {}} 
      >
        { part }
      </span>)
    } </span>;
  }

  const highlightMovieTextOnHover = e => {
    setIndexOfHighlightedMovie(parseInt(e.target.getAttribute('index')))
  }

  return {highligthText, highlightMovieTextOnHover}
}