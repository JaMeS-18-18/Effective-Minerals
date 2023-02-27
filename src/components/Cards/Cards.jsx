import React from 'react'
import './Cards.css'
export default function Cards(props) {
  return (
    <div className={`${!props.head ? 'Cardcha': "Cardcha2"}`}>
      {
        props.head ? <h3 className='text-center my-3'>{props.head}</h3> : ''
      }
      <img className='img-fluid' src={props.img} alt="" />
      <p>{props.title}</p>
    </div>
  )
}
