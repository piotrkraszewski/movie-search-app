import s from './MoviesList.module.sass'
import ProfileMovieCard from './ProfileMovieCard'
import { START_PAGE_CARDS_TRANSITION } from 'Utils/Consts'
import useGotoOtherRoutes from 'Hooks/SearchbarHooks/useGotoOtherRoutes'
import { motion, AnimatePresence } from "framer-motion"


export default function MoviesList({props}) {
  const {status, userMovies} = props
  const {selectedMovieInProfilePage} = useGotoOtherRoutes()


  return (
    <motion.div layout='position' className={s.MoviesList}>
      <h2 layout='true'>{status}</h2>
      <div className={s.grid}>
        <AnimatePresence exitBeforeEnter>
        { userMovies.map(movie => (
          movie.status === status &&
            <ProfileMovieCard
              key={movie.id}
              cardData={movie}
              onClick={selectedMovieInProfilePage}
              cardTransitionDuration={START_PAGE_CARDS_TRANSITION}
              imgTransition={0.5}
              imgHeight={'750'}
              imgWidth={'500'}
            />
        ))}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}