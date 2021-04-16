import { useState, useEffect, useRef } from 'react'
import 'styles/main.scss'
import { Route, Switch, useLocation, useHistory } from 'react-router-dom'
import { AnimatePresence } from "framer-motion"
import { AppContext } from 'AppFiles/Contexts/AppContext'
import AppScroolbar from 'ReusableComponents/Scroolbar/AppScrollbar'
import { getMoviesDataToDisplayInSearch, getAllMoviesData, getMovieData, createSearchMoviesUrl, setInitMovieID } from 'Utils/FetchFunctions'
import { POPULAR_MOVIES_URL, BASE_BG_IMG_URL } from 'Utils/Consts'
import { getCurrentPageUrl, getMovieIdFromLocationPathname } from 'Utils/RoutesFunctions'
import ArrowKeysReact from 'arrow-keys-react'
import AppBackground from 'ReusableComponents/AppBackground/AppBackground'
import StartPage from 'AppFiles/StartPage/StartPage'
import MoviePage from 'AppFiles/Movie/MoviePage'
import { isMobile } from "react-device-detect"
import BgGreen from 'Images/BgGreen.jpg'
import Navbar from 'AppFiles/Navbar/Navbar'
import Register from 'AppFiles/Forms/Register/Register'
import Login from 'AppFiles/Forms/Login/Login'
import AuthProvider from 'AppFiles/Contexts/AuthContext'
import UserPanel from 'AppFiles/UserPanel/UserPanel'
import ForgotPassword from 'AppFiles/Forms/ForgotPassword/ForgotPassword'
import PrivateRoute from 'Utils/PrivateRoute'


export default function App () {
  const location = useLocation()  // key to app routes
  const history = useHistory()
  const pushToHistory = url => history.push(url)


// ==== Fetch StartPage ====
  const [backgroundIMG, setBackgroundIMG] = useState()
  const [suggestions, setSuggestions] = useState([])
  const [searchbarText, setSearchbarText] = useState('')

  async function fetchPopularMoviesOnStartPage() {
    setSuggestions(await getMoviesDataToDisplayInSearch(POPULAR_MOVIES_URL))
  }

  // if search is empty on main page it displays popular movies
  // loads at page starup because searchbarText === '' at start
  // checks this condition every time
  useEffect(() => {
    if(searchbarText === '' && location.pathname ==='/') fetchPopularMoviesOnStartPage()
    else if(searchbarText === '') {
      setTimeout(() => {
        setSuggestions([])
      }, 600) // debounc time + animation time
    }
  }, [searchbarText, location.pathname])
// ==== END Fetch StartPage ====


// ==== Fetch movie page based on movieID parameter ====
  const [movieID, setMovieID] = useState(() => setInitMovieID(location))
  const [movieData, setMovieData] = useState({})
  
  useEffect(async () => {
    movieID && setMovieData(await getMovieData(movieID))
  }, [movieID])

  
  // implements back button in browser
  // allows to go back to previous movie on moviePage
  useEffect(() => {
    if(location.pathname === '/' && !searchbarText)
      fetchPopularMoviesOnStartPage()

    else if(location.pathname.includes('/movie/'))
      setMovieID(getMovieIdFromLocationPathname(location))
    
  }, [location, searchbarText])
  
// ==== END Fetch movie page ====



// ==== Search state and functions ====
  const [allMoviesData, setAllMoviesData] = useState([])
  const [oldSearchbarText, setOldSearchbarText] = useState('')
  const [dispPostersNum, setDispPostersNum] = useState(isMobile ? 9 : 12)

  const onSearchbarTextChanging = e => {
    const value = e.target.value.replace(/[^\w\s]/gi, '')
    setSearchbarText(value)
    showResInSearchBar(value)
  }

  const showResInSearchBar = async (value) => {
    setDispPostersNum(isMobile ? 6 : 12)
    if (value.length === 0) setOldSearchbarText('')
    if (value.length >= 1) {
      const allMoviesData = await getAllMoviesData(createSearchMoviesUrl(value))
      const dataToDisplay = await getMoviesDataToDisplayInSearch(allMoviesData)

      setAllMoviesData(allMoviesData)
      setSuggestions(dataToDisplay)
      setOldSearchbarText(value)
    }
    
    isMobile && setTimeout(() => {
      setDispPostersNum(9)
    }, 1000) // adds 3 more posters
  }

  // State of MovieSeachbar
  const [showQuickSearchRes, setShowQuickSearchRes] = useState(false)
  const [indexOfHighlightedMovie, setIndexOfHighlightedMovie] = useState()
  
  // ==== END Search state and functions ====

  
  // == ScrollBar stuff ==
  const infiniteScroll = e => {
    // console.log('infinite Scroll')
    setDispPostersNum(20)
  }

  const scrollBarRef = useRef(null)
  // == END ScrollBar stuff ==


// ==== Console log stuff ====
  useEffect(() => {
    console.log({suggestions})
  }, [suggestions])

  useEffect(() => {
    console.log({movieData})
    setBackgroundIMG(movieData.backdrop_path && `${BASE_BG_IMG_URL}${movieData.backdrop_path}`)
  }, [movieData])

  useEffect(() => {
    console.log(`searchbarText: ${searchbarText}`)
  }, [searchbarText])

  useEffect(() => {
    console.log(`movieID: ${movieID}`)
  }, [movieID])

// ==== END Console log stuff ====


  return (
    <div>
      <AppBackground 
        fetchImg={backgroundIMG} 
        fallbackImg={BgGreen}
      />

      <div
        id='app'
        {...ArrowKeysReact.events}
        tabIndex='1'
      >
        <AppContext.Provider 
          value={{movieID, movieData, searchbarText, setSearchbarText, oldSearchbarText, setOldSearchbarText, suggestions, setSuggestions,  onSearchbarTextChanging, allMoviesData, setAllMoviesData, setMovieID, fetchPopularMoviesOnStartPage, showResInSearchBar, history, location, pushToHistory, dispPostersNum, setDispPostersNum, infiniteScroll, scrollBarRef, showQuickSearchRes, setShowQuickSearchRes, indexOfHighlightedMovie, setIndexOfHighlightedMovie}}
        >
          <AuthProvider>
            <AppScroolbar>
            <Navbar/>
              <AnimatePresence exitBeforeEnter>
                <Switch 
                  location={location} 
                  key={getCurrentPageUrl(location)}
                >
                  <Route exact path='/' render={() => <StartPage/>} />
                  <Route exact path={`/movie/:${movieID}`} render={() => <MoviePage/>} />
                  <Route exact path={`/register`} render={() => <Register/>} />
                  <Route exact path={`/login`} render={() => <Login/>} />
                  <Route exact path={`/forgot-password`} render={() => <ForgotPassword/>} />
                  <PrivateRoute exact path='/user-panel' component={UserPanel} />
                </Switch>
              </AnimatePresence>
          </AppScroolbar>
          </AuthProvider>
        </AppContext.Provider>
      </div>
    </div>
  )
}