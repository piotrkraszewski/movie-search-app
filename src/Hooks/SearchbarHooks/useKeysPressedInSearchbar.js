import { useContext } from 'react'
import ArrowKeysReact from 'arrow-keys-react'
import { AppContext } from 'AppFiles/Contexts/AppContext'
import { NUM_OF_DISP_RES_PC } from 'Utils/Consts'
import GotoOtherRoutesHooks from './useGotoOtherRoutes'


export default function KeysPressedInSearchbarHooks() {
  const { suggestions, pushToHistory, showQuickSearchRes, setShowQuickSearchRes, indexOfHighlightedMovie, setIndexOfHighlightedMovie} = useContext(AppContext)

  const {selectedMovieInQuickSearch} = GotoOtherRoutesHooks()
  
  
  function enterKeyInSearchbar(e){
    const code = e.keyCode || e.which
    if (code === 13 /* enter key */) {
      if (!showQuickSearchRes) setShowQuickSearchRes(true)
      if (showQuickSearchRes) {
        if (indexOfHighlightedMovie === NUM_OF_DISP_RES_PC) {
          pushToHistory(`/`)
        } else {
          selectedMovieInQuickSearch(suggestions[indexOfHighlightedMovie].id)
        }
      } 
    }
  }

  // Up and down arrow keys configuration
  // allows using up and down key to select movie in quick search
  ArrowKeysReact.config({
    up: () => {
      isNaN(indexOfHighlightedMovie)
        ? setIndexOfHighlightedMovie(NUM_OF_DISP_RES_PC)
        : indexOfHighlightedMovie < 0
          ? setIndexOfHighlightedMovie(NUM_OF_DISP_RES_PC)
          : setIndexOfHighlightedMovie(prevState => prevState - 1)
    },
    down: () => {
      isNaN(indexOfHighlightedMovie)
        ? setIndexOfHighlightedMovie(0)
        : indexOfHighlightedMovie > NUM_OF_DISP_RES_PC
          ? setIndexOfHighlightedMovie(0)
          : setIndexOfHighlightedMovie(prevState => prevState + 1)
    }
  })


  return enterKeyInSearchbar
}