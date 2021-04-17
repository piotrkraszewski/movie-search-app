import { useContext } from 'react'
import './SearchbarResults.scss'
import { AppContext } from 'AppFiles/Contexts/AppContext'
import NoResult from 'ReusableComponents/NoResult/NoResult'
import ResultsMobile from './ResultsMobile'
import ResultsPC from './ResultsPC'
import useDelayShowNoResults from 'Hooks/SearchbarHooks/useDelayShowNoResults'
import useSearchbarResultsTransition from 'Hooks/SearchbarHooks/useSearchbarResultsTransition'
import { isMobile } from "react-device-detect"


export default function MovieSearchbarResults() {
  const { searchbarText, suggestions, showQuickSearchRes, setShowQuickSearchRes } = useContext(AppContext)

  const showNoResults = useDelayShowNoResults(1000, searchbarText)
  
  return (
  <div className='SearchbarResults'>
    {useSearchbarResultsTransition(
      <>
        {suggestions.length > 0 && showQuickSearchRes
        ? isMobile ? <ResultsMobile/> : <ResultsPC/>
        : <NoResult 
            className={isMobile ? 'ResultsMobile' : 'ResultsPC'}
            fadeInConditionsArr={[showQuickSearchRes, searchbarText, showNoResults]}
            onClose={setShowQuickSearchRes}
            closeBtn={isMobile ? 'btn' : 'img'}
          />
        }
      </>
    )}
  </div>
  )
}