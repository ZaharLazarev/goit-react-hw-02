import css from './App.module.css'
import clsx from "clsx";
import { useEffect, useState } from "react";
import Options from '../Options/Options'
import Feedback from '../Feedback/Feedback'
import Description from '../Description/Description'
import Notification from '../Notification/Notification'
const getReviewsItem = () => {
  const savedReviews = window.localStorage.getItem("reviews");
  return savedReviews !== null ? JSON.parse(savedReviews) : {
    good: 0,
    neutral: 0,
    bad: 0
  };
};
function App() {
  const [reviews, setCount] = useState(getReviewsItem)
  useEffect(()=>{
    window.localStorage.setItem("reviews", JSON.stringify(reviews));
  },[reviews]);
  const updateFeedback = (value)=>{
    setCount({
      ...reviews,
      [value]:reviews[value]+1
    })
  }
  const totalFeedback = reviews.good + reviews.neutral + reviews.bad;
  const percent = Math.round((reviews.good / totalFeedback) * 100);
  const ResetFunction = ()=>{
    setCount({
      good:0,
      neutral:0,
      bad:0
    })
    }


  return(
   <div className={clsx(css.MainContainer)}>
    <Description/>
    <Options updateFeedback={updateFeedback} totalFeedback={totalFeedback} ResetFunction={ResetFunction}/>
    {totalFeedback>0?<Feedback totalFeedback={totalFeedback} reviews={reviews} percent={percent}/>:<Notification/>}
  </div> 
  )
}

export default App
