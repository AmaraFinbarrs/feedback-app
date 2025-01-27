import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackStats() {
  const {feedback} = useContext(FeedbackContext)
  let average = (feedback.reduce((total, item) => total + item.rating, 0) / feedback.length).toFixed(1).replace(/\.0$/, "")

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} {feedback.length === 1 ? " Review" : " Reviews"}</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}

export default FeedbackStats
