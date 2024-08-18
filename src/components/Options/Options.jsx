import React from 'react';
import clsx from "clsx";
import css from './Options.module.css'
export default function Options({Update, totalFeedback, ResetFunction}){
  return(
  <div className={clsx(css.OptionsButtonContainer)}>
   <button className={clsx(css.OptionsButton)} onClick={() => {Update('good')}}>Good</button>
   <button className={clsx(css.OptionsButton)} onClick={() => {Update('neutral')}}>Neutral</button>
   <button className={clsx(css.OptionsButton)} onClick={() => {Update('bad')}}>Bad</button>
   {totalFeedback>0 && <button className={clsx(css.OptionsButton,css.OptionsButtonReset)} onClick={ResetFunction}>Reset</button>}
  </div>
  )
}