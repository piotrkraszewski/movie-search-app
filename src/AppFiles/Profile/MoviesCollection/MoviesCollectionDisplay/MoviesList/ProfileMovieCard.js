import { motion, AnimatePresence } from "framer-motion"
import s from './ProfileMovieCard.module.scss'
import ImageFadeIn from "react-image-fade-in"
import no_image from 'Images/no_image.png'
import PropTypes from 'prop-types'

ProfileMovieCard.propTypes = {
  cardData: PropTypes.object,
  onClick: PropTypes.func,
  className: PropTypes.string,
  cardTransitionDuration: PropTypes.number,
  imgTransition: PropTypes.number,
  imgHeight: PropTypes.string,
  imgWidth: PropTypes.string
}

export default function ProfileMovieCard ({
  cardData, onClick, className, cardTransitionDuration, imgTransition, imgHeight, imgWidth}) {

  return (
    <motion.div
      layout     //reordering animation
      className={s.ProfileMovieCard}
      onClick={() => onClick(cardData.id)}

      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: cardTransitionDuration, ease: 'easeInOut' }}
    >
      { cardData.rating &&
      <p className={s.rating}>{cardData.rating}</p> }
      <ImageFadeIn
        width={imgWidth}
        height={imgHeight}
        opacityTransition={imgTransition}
        src={cardData.poster ? cardData.poster : no_image}
        alt={`poster ${cardData.id}`}
      />
      <p className={s.title}>{cardData.title}</p>
    </motion.div>
  )
}