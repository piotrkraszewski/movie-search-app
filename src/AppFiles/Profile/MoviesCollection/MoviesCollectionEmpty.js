import s from './MoviesCollection.module.sass'
import { useHistory } from 'react-router-dom'

export default function MoviesCollectionEmpty() {
  const history = useHistory()
  return (
    <div className={`${s.MoviesCollection} ${s.Empty}`}>
      <h2>Movie List:</h2>
      <p>
        Your list is empty. <br></br>
        Search for a movie you want to add. When you open movie page, you can add status and rating to it. 
      </p>  
      <p 
        className={s.ExampleMovie}
        onClick={() => history.push('/movie/399566')}>
        Click here to go to example movie
      </p>  
    </div>
  )
}