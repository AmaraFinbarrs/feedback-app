import { useState, useContext, useEffect } from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackForm() {
  const [text, setText] = useState("")
  const [message, setMessage] = useState("")
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)

  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

  useEffect(() => {
    if (feedbackEdit.edit){
      setBtnDisabled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])

  const handleTextChange = (e) => {
    if (text === "") {
        setBtnDisabled(true)
        setMessage(null)
    } else if (text !== null && text.trim().length <= 10) {
        setBtnDisabled(true)
        setMessage("Text must be at least 10 characters")
    } else {
        setMessage(null)
        setBtnDisabled(false)
    }
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length >10){
        const newFeedback = {
            text,
            rating
        }
        feedbackEdit.edit ? updateFeedback(feedbackEdit.item.id, newFeedback) : addFeedback(newFeedback)
        setText('')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)}/>
        {/* add rating select component */}
        <div className="input-group">
            <input 
              onChange={handleTextChange} 
              type="text" 
              placeholder='Write a Review'
              value={text}
              />
            <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm

