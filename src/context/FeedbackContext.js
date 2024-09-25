import { createContext, useState } from 'react';
import { v4 as uuidv4 } from "uuid"

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
        id: 1,
        text: 'I love this product!',
        rating: 10
    },
    {
        id: 2,
        text: 'Amazing product!',
        rating: 6
    },
    {
        id: 3,
        text: 'Beautiful product!',
        rating: 8
    }
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  // Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete this feedback?")) {
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // Add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4()
    setFeedback([newFeedback,...feedback])
  }

  // Edit feedback
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  // Update feedback
  const updateFeedback = (id, newFeedback) => {
    setFeedback(feedback.map((item) => item.id === id ? {id, ...item, ...newFeedback} : item))
    setFeedbackEdit({
      item: {},
      edit: false
    })
  }

  return (
    <FeedbackContext.Provider 
        value={{ feedback,
         deleteFeedback,
         addFeedback,
         editFeedback,
         feedbackEdit,
         updateFeedback
        }}
    >
        {children}
    </FeedbackContext.Provider>
  );
}

export default FeedbackContext;