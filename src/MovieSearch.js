import { useEffect } from 'react'
import TMDBLogo from './images/tmdb.svg'
import './styles/main.scss'
import Scroolbar from './Scroolbar/Scroolbar'
import ArrowKeysReact from 'arrow-keys-react'
import {Link, useHistory } from 'react-router-dom';


export default function SearchBox (props) {
  const {show, setShow, text, setText, oldText, setOldText, cursor, setCursor, suggestions, setSuggestions, queryData, setQueryData, sliceNumber, setSliceNumber,  node, handleChange, handleClickOnInput, suggestionsSelected, fetchStartPage} = props


  const gotoStarPage = () => {
    setQueryData([])
    setText('')
    fetchStartPage()
  }


    // ==== Search arrow up and down logic ====
    
    ArrowKeysReact.config({
      up: () => {
        isNaN(cursor)
          ? setCursor(sliceNumber)
          : cursor < 0
          ? setCursor(sliceNumber)
          : setCursor(prevState => prevState - 1)
      },
      down: () => {
        isNaN(cursor)
          ? setCursor(0)
          : cursor > sliceNumber
          ? setCursor(0)
          : setCursor(prevState => prevState + 1)
      }
    })
  
    // useEffect(() => {
    //   console.log(cursor)
    // }, [cursor])
  
    const enterPressed = e => {
      var code = e.keyCode || e.which
      if (code === 13) {
        // enter key
        // zmienna kursor kt�ra �ledzi kt�ry li jest pod�wietlony daje nam indeks za pomoc� kt�rego mo�emy uzyska� id filmu z oryginalnej tablicy
        // dodanie pojawienie paska po wcisnieciu enter
        if (show) {
          if (cursor === sliceNumber) {
            showMore()
          } else {
            suggestionsSelected(suggestions[cursor])
            setShow(false)
            setText(oldText)
          }
        } else {
          if (cursor === sliceNumber) {
            showMore()
          } else {
            setText(oldText)
            setOldText('')
          }
          setShow(true)
        }
      }
    } // ==== END Search arrow up and down logic ====

  // *** show more button ***
  const history = useHistory()

  const showMore = e => {
    if (sliceNumber >= 10){
      history.push("/")
      setSliceNumber(20)  // moze jakos inaczej to rozwiaza�
    } else {
      if(suggestions.length > 0){
        setSliceNumber(sliceNumber + 5)
      }
    }
  }

  useEffect(() => {
    if(queryData > 0){
      console.dir(`sliceNumber: ${sliceNumber}`)
      let movies = queryData
        .map(a => [
          a.original_title,
          a.id,
          `https://image.tmdb.org/t/p/w500${a.poster_path}`
        ])
        .slice(0, sliceNumber)
      setSuggestions(movies)
    }
  }, [sliceNumber])
  // END show more button

// ==== Pod�wietlenie tekstu ====
function getHighlightedText(text, highlight, index) {
  const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
  return <span> { parts.map((part, i) => 
    <span 
      key={i} 
      style=
      {(part.toLowerCase() === highlight.toLowerCase() && cursor !== index)
        ? { color: '#00FC87', fontWeight: 'bold' } 
        : part.toLowerCase() === highlight.toLowerCase() 
          ? { fontWeight: 'bold'}
          : {}} 
    >
        { part }
    </span>)
  } </span>;
}

const onMouseEnterHandle = e => {
  setCursor(parseInt(e.target.getAttribute('index')))
}
// ==== END Pod�wietlenie tekstu ====


const renderSugestions = () => {
  if (queryData.length > 0) {
    return (
      <Scroolbar show={show} text={text}>
      <ul 
        className={(show && text) ? 'animate list' : 'list'} >
      {suggestions.map((item, index) => 
      <Link to={`/movie/${item[1]}`} className='linkStyle'>
        <li 
          className={cursor === index ? 'active tt-suggestion' : 'tt-suggestion'}
          onClick={()=> suggestionsSelected(item)}
          onMouseEnter={onMouseEnterHandle} 
          index={index}
          key={index}
        >
          <div className='row'>
            <img src={item[2]} className='col-lg-2 col-md-3 col-sm-4 col-3 Image'/>
            <p className='col-lg-10 col-md-9 col-sm-8 col-9 textSugestion sugest'>
              {getHighlightedText(item[0], text, index)}
            </p>
          </div>
        </li>
      </Link>)}
        
        <li style={{visibility: queryData.length > suggestions.length ? "visible": "collapse"}}>
          <p 
            onClick={showMore} 
            index={sliceNumber}
            className={cursor === sliceNumber 
            ? 'active textSugestion showMore tt-suggestion' 
            : 'textSugestion showMore tt-suggestion'}
            >
              { sliceNumber >= 10 ? 'full screen search' 
              : suggestions.length > 0 ? 'show more' 
              : 'no result'}
          </p>
        </li>
      </ul>
      </Scroolbar>
    )
  } else {
    if (text) {
      return (
        <ul className='animate list showMore noResult'>
          <li>no result</li>
        </ul>
        )
      } 
  }
}

  return (
    <div className='col-xs-12 search-container nopadding'>
      <div className='row'>
        <div className='col-xs-12 col-sm-3 col-lg-3'>
        <Link to='/'>
          <img src={TMDBLogo} className='logo' alt='The Movie Database' onClick={gotoStarPage}/>
        </Link>
        </div>
        <div className='col-xs-12 col-sm-9 col-lg-9 searchInside' ref={node}>
          <form className='searchbox' onSubmit={e => { e.preventDefault()}}>
            <input
              onChange={handleChange}
              className='myform'
              type='text'
              placeholder='Search Movie Title...'
              value={text !== '' ? text : oldText}
              onKeyPress={enterPressed}
              onClick={handleClickOnInput}
            />
          </form>
          {renderSugestions()}
        </div>
      </div>
    </div>
  )
}