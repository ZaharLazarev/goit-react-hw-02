import React from 'react';
export default function Feedback({reviews, totalFeedback, percent}){
  return(
  <div>
    <p>Good:<span>{reviews.good}</span></p>
    <p>Neutral:<span>{reviews.neutral}</span></p>
    <p>Bad:<span>{reviews.bad}</span></p>
    <p>Total:<span>{totalFeedback}</span></p>
    <p>Positive:<span>{percent}</span></p>
  </div>
  )
}